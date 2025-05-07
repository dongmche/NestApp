import { CommonCreateOrUpdateDto } from '../../../common/dto/commonCreateOrUpdateDto';
import { IsDate, IsString } from 'class-validator';
import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMediaDto extends CommonCreateOrUpdateDto {
  @ApiProperty({ required: false })
  @IsString()
  title?: string;

  @ApiProperty({ required: false })
  @IsString()
  content?: string;

  @ApiProperty({ required: false })
  @IsString()
  image?: string;

  @ApiProperty({ required: false })
  @IsDate()
  @Column({ type: 'date' }) // 👈 explicitly set to 'date'
  date?: Date;

  @ApiProperty({ required: false })
  @IsString()
  readingTime?: string;
}
