import { IsString } from 'class-validator';

export class CreateAboutUsTabDto {
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
