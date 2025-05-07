import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateVenueDto extends CommonCreateOrUpdateDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  geoTitle?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  engTitle?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  geoDescription?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  engDescription?: string;
}
