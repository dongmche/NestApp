import { CommonDto } from '../../../common/dto/common.dto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateGalleryDto extends CommonDto {
  @IsString()
  title: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true }) // Validates each element in the array
  images: string[];
}
