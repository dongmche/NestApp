import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';

export class ResponseMediaDto extends CommonCreateOrUpdateDto {
  _id: string;

  title: string;

  content: string;

  image: string;

  date: Date;

  readingTime: string;
}
