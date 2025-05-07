import { CommonResponseDto } from '../../../common/dto/common.response.dto';
import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';
import { ImageItem } from './image-item';

export class ResponseGalleryDto extends CommonResponseDto {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public images: ImageItem[];

  constructor(id: ObjectId, title: string) {
    super(id);
    this.title = title;
  }
}
