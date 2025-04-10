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
  @Column({ type: 'date' }) // 👈 explicitly set to 'date'
  date: Date;

  @IsString()
  readingTime: string;
}
