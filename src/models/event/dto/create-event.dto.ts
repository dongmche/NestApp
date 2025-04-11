import { IsString, IsBoolean, IsDate, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';
import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';

export class CreateEventDto extends CommonCreateOrUpdateDto{
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsUrl()
  url: string;

  @IsString()
  img: string;

  @Type(() => Date)
  @IsDate()
  date: Date;

  @IsString()
  location: string;

  @IsUrl()
  ticketUrl: string;

  @IsBoolean()
  isFeatured: boolean;

  @IsBoolean()
  isAvailable: boolean;
}
