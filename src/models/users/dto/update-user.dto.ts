import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends CommonCreateOrUpdateDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true }) // Validates each element in the array
  roles?: string[];
}
