import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ImageItem } from './image-item';
import { Type } from 'class-transformer';

export class UpdateGalleryDto extends CommonCreateOrUpdateDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString() // Validates each element in the array
  title?: string;

  @ApiProperty({ type: [ImageItem], required: false })
  @IsOptional()
  @ValidateNested({ each: true }) // ✅ validate each item as object
  @Type(() => ImageItem) // ✅ transform each item
  images?: ImageItem[];
}
