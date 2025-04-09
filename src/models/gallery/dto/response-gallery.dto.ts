import { CommonResponseDto } from '../../../common/dto/common.response.dto';

export class ResponseGalleryDto extends CommonResponseDto{
  id: string;
  title: string;
  images: string[];
}
