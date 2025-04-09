import { CommonDto } from '../../../common/dto/common.dto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateGalleryDto extends CommonDto {
  @IsString() // Validates each element in the array
  title?: string;


  @IsArray()
  @IsOptional()
  @IsString({ each: true }) // Validates each element in the array
  images?: string[];
}
