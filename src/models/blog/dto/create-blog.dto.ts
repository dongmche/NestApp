import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogDto extends CommonCreateOrUpdateDto {
  @ApiProperty({ required: false })
  @IsString()
  title?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  date?: Date;
}
