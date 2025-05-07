import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMediaDto extends CommonCreateOrUpdateDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsString()
  image: string;

  @ApiProperty()
  @IsDate()
  date: Date;

  @ApiProperty()
  @IsString()
  readingTime: string;
}
