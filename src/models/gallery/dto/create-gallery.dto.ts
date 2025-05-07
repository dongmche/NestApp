import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ImageItem } from './image-item';
import { Type } from 'class-transformer';

export class CreateGalleryDto extends CommonCreateOrUpdateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Title can not be empty' })
  title: string;

  @ApiProperty({ type: [ImageItem], required: false })
  @IsOptional()
  @ValidateNested({ each: true }) // ✅ validate each item as object
  @Type(() => ImageItem) // ✅ transform each item
  images?: ImageItem[];
}
