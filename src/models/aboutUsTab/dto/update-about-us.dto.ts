import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAboutUsDto extends CommonCreateOrUpdateDto {
  @ApiProperty({ required: false })
  @IsString()
  value?: string;

  @ApiProperty({ required: false })
  @IsString()
  geoLabel?: string;

  @ApiProperty({ required: false })
  @IsString()
  engLabel?: string;

  @ApiProperty({ required: false })
  @IsString()
  geoDescription?: string;

  @ApiProperty({ required: false })
  @IsString()
  engDescription?: string;
}
