import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBlogDto extends CommonCreateOrUpdateDto {
  @ApiProperty({ required: false })
  @IsString() // Validates each element in the array
  title?: string;

  @ApiProperty({ required: false })
  @IsString() // Validates each element in the array
  content?: string;

  @ApiProperty({ required: false })
  @IsString() // Validates each element in the array
  image?: string;

  @ApiProperty({ required: false })
  @IsDate() // Validates each element in the array
  date?: Date;
}
