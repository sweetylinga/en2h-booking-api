import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingStatus } from '@prisma/client';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateBookingDto) {
    const service = await this.prisma.service.findUnique({
      where: { id: dto.serviceId },
    });

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    const bookingDate = new Date(dto.bookingDate);

    if (bookingDate < new Date()) {
      throw new BadRequestException(
        'Booking date cannot be in the past',
      );
    }

    return this.prisma.booking.create({
      data: {
        customerName: dto.customerName,
        customerEmail: dto.customerEmail,
        customerPhone: dto.customerPhone,
        bookingDate,
        bookingTime: dto.bookingTime,
        notes: dto.notes,
        serviceId: dto.serviceId,
      },
    });
  }

  findAll() {
    return this.prisma.booking.findMany({
      include: {
        service: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.booking.findUnique({
      where: { id },
      include: {
        service: true,
      },
    });
  }

  async updateStatus(id: number, status: string) {
  const booking = await this.prisma.booking.findUnique({
    where: { id },
  });

  if (!booking) {
    throw new NotFoundException('Booking not found');
  }

  // Prevent CANCELLED -> COMPLETED
  if (
    booking.status === 'CANCELLED' &&
    status === 'COMPLETED'
  ) {
    throw new BadRequestException(
      'Cancelled booking cannot be marked as completed',
    );
  }

  return this.prisma.booking.update({
    where: { id },
    data: {
      status: status as any,
    },
    include: {
      service: true,
    },
  });
}
async remove(id: number) {
  return this.prisma.booking.delete({
    where: {
      id,
    },
  });
}
}