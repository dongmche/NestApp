import { IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ImageItem {
  @IsString()
  @ApiProperty()
  url: string;

  @IsBoolean()
  @ApiProperty()
  isVisible: boolean;
}
