import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateAboutUsDto extends CommonCreateOrUpdateDto {
  @IsString()
  value?: string;

  @IsString()
  geoLabel?: string;

  @IsString()
  engLabel?: string;

  @IsString()
  geoDescription?: string;

  @IsString()
  engDescription?: string;
}
