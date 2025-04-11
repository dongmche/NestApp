import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateVenueDto extends CommonCreateOrUpdateDto {
  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  geoTitle?: string;

  @IsOptional()
  @IsString()
  engTitle?: string;

  @IsOptional()
  @IsString()
  geoDescription?: string;

  @IsOptional()
  @IsString()
  engDescription?: string;
}
