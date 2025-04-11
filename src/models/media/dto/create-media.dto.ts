import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsDate, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CreateMediaDto extends CommonCreateOrUpdateDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  image: string;

  @IsDate()
  date: Date;

  @IsString()
  readingTime: string;
}
