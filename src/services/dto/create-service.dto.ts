import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsNumber()
  duration!: number;

  @IsNumber()
  price!: number;

  @IsBoolean()
  isActive!: boolean;
}