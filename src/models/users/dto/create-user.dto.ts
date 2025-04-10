import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateUserDto extends CommonCreateOrUpdateDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true }) // Validates each element in the array
  roles?: string[];
}
