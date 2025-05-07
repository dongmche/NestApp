import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsBoolean, IsDate, IsString, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEventDto extends CommonCreateOrUpdateDto {
  @ApiProperty({ required: false })
  @IsString()
  title?: string;

  @ApiProperty({ required: false })
  @IsString()
  geoDescription?: string;

  @ApiProperty({ required: false })
  @IsString()
  engDescription?: string;

  @ApiProperty({ required: false })
  @IsUrl()
  url?: string;

  @ApiProperty({ required: false })
  @IsString()
  img?: string;

  @ApiProperty({ required: false })
  @Type(() => Date)
  @IsDate()
  date?: Date;

  @ApiProperty({ required: false })
  @IsString()
  location?: string;

  @ApiProperty({ required: false })
  @IsUrl()
  ticketUrl?: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isFeatured?: boolean;

  @ApiProperty({ required: false })
  @IsBoolean()
  isAvailable?: boolean;
}
