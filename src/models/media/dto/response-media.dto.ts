import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { ObjectId } from 'mongodb';

export class ResponseMediaDto extends CommonCreateOrUpdateDto {
  id: ObjectId;

  title: string;

  content: string;

  image: string;

  date: Date;

  readingTime: string;
}
