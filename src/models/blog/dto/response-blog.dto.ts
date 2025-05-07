import { CommonResponseDto } from '../../../common/dto/common.response.dto';
import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseBlogDto extends CommonResponseDto {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public content: string;

  @ApiProperty()
  public image: string;

  @ApiProperty()
  public date: Date;

  constructor(
    id: ObjectId,
    title: string,
    content: string,
    image: string,
    date: Date,
  ) {
    super(id);
    this.title = title;
    this.content = content;
    this.image = image;
    this.date = date;
  }
}
