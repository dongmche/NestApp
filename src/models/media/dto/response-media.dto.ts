import { CommonDto } from '../../../common/dto/common.dto';

export class ResponseMediaDto extends CommonDto {
  _id: string;

  title: string;

  content: string;

  image: string;

  date: Date;

  readingTime: string;
}
