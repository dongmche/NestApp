import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseMediaDto extends CommonCreateOrUpdateDto {
  @ApiProperty()
  id: ObjectId;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  readingTime: string;
}
