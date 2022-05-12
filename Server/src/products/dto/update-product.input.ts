import { InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

@InputType()
export class UpdateProductInput {
  @IsString()
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Invalid characters' })
  name?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty({ message: 'Price is required' })
  price?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty({ message: 'Stock is required' })
  stock?: number;
}
