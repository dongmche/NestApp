import { IsOptional, IsString } from 'class-validator';

export class UpdateAboutUsTabDto {
  @IsString()
  @IsOptional()
  geoValue?: string;

  @IsString()
  @IsOptional()
  engValue?: string;

  @IsString()
  @IsOptional()
  geoLabel?: string;

  @IsString()
  @IsOptional()
  engLabel?: string;

  @IsString()
  @IsOptional()
  geoDescription?: string;

  @IsString()
  @IsOptional()
  engDescription?: string;
}
