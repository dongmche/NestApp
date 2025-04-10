import { CommonResponseDto } from '../../../common/dto/common.response.dto';
import { ObjectId } from 'mongodb';

export class ResponseBlogDto extends CommonResponseDto {
  public title: string;
  public content: string;
  public image: string;
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
