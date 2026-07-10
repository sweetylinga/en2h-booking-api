import {
  IsDateString,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBookingDto {
  @IsString()
  customerName!: string;

  @IsEmail()
  customerEmail!: string;

  @IsString()
  customerPhone!: string;

  @IsDateString()
  bookingDate!: string;

  @IsString()
  bookingTime!: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsInt()
  serviceId!: number;
}