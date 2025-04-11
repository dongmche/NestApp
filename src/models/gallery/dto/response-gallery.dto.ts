import { CommonResponseDto } from '../../../common/dto/common.response.dto';
import { ObjectId } from 'mongodb';


export class ResponseGalleryDto extends CommonResponseDto {
  public title: string;
  public images: string[];

  constructor(id: ObjectId) {
    super(id);
  }
}
