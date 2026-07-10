import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
  private prisma: PrismaService,
  private jwtService: JwtService,
) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
      },
    });

    return {
      message: 'User registered successfully',
      user,
    };
  }

  
    async login(email: string, password: string) {
  const user = await this.prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new BadRequestException('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new BadRequestException('Invalid credentials');
  }

  const token = this.jwtService.sign({
    userId: user.id,
    email: user.email,
  });

  return {
    message: 'Login successful',
    access_token: token,
  };
  }
}