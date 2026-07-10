import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt/jwt.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: 'mySecretKey',
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    JwtGuard,
  ],
  exports: [
    JwtModule,
    JwtGuard,
  ],
})
export class AuthModule {}