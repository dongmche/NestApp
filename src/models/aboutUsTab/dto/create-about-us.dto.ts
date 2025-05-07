import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAboutUsDto extends CommonCreateOrUpdateDto {
  @ApiProperty()
  @IsString()
  value: string;

  @ApiProperty()
  @IsString()
  geoLabel: string;

  @ApiProperty()
  @IsString()
  engLabel: string;

  @ApiProperty()
  @IsString()
  geoDescription: string;

  @ApiProperty()
  @IsString()
  engDescription: string;
}
