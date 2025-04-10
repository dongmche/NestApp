import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsDate, IsString } from 'class-validator';

export class UpdateBlogDto extends CommonCreateOrUpdateDto {
  @IsString() // Validates each element in the array
  title?: string;

  @IsString() // Validates each element in the array
  content?: string;

  @IsString() // Validates each element in the array
  image?: string;

  @IsDate() // Validates each element in the array
  date?: Date;
}
