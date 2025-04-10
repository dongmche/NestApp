import { IsString } from 'class-validator';
import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';

export class CreateAboutUsTabDto extends CommonCreateOrUpdateDto{
  @IsString()
  geoValue: string;

  @IsString()
  engValue: string;

  @IsString()
  geoLabel: string;

  @IsString()
  engLabel: string;

  @IsString()
  geoDescription: string;

  @IsString()
  engDescription: string;
}
