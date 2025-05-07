import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import {
  IsArray,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends CommonCreateOrUpdateDto {
  @ApiProperty({ minLength: 6, maxLength: 20, required: false })
  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'Username must be at least 6 characters long' })
  @MaxLength(20, { message: 'Username must be at most 20 characters long' })
  username?: string;

  @ApiProperty({ minLength: 6, maxLength: 100, required: false })
  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(100, { message: 'Password must be at most 100 characters long' })
  password?: string;

  // @ApiProperty({ required: false })
  // @IsArray()
  // @IsOptional()
  // @IsString({ each: true }) // Validates each element in the array
  // roles?: string[];
}
