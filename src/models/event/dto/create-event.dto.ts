import { IsString, IsBoolean, IsDate, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';
import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto extends CommonCreateOrUpdateDto{
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  geoDescription: string;

  @ApiProperty()
  @IsString()
  engDescription: string;

  @ApiProperty()
  @IsUrl()
  url: string;

  @ApiProperty()
  @IsString()
  img: string;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  date: Date;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsUrl()
  ticketUrl: string;

  @ApiProperty()
  @IsBoolean()
  isFeatured: boolean;

  @ApiProperty()
  @IsBoolean()
  isAvailable: boolean;
}
