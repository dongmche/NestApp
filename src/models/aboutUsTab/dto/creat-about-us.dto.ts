import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsString } from 'class-validator';

export class CreatAboutUsDto extends CommonCreateOrUpdateDto {
  @IsString()
  value: string;

  @IsString()
  geoLabel: string;

  @IsString()
  engLabel: string;

  @IsString()
  geoDescription: string;

  @IsString()
  engDescription: string;
}
