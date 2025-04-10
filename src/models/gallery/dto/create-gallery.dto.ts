import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateGalleryDto extends CommonCreateOrUpdateDto {
  @IsString()
  title: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true }) // Validates each element in the array
  images: string[];
}
