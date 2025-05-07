import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVenueDto extends CommonCreateOrUpdateDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  geoTitle?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  engTitle?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  geoDescription?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  engDescription?: string;
}
