import { CommonResponseDto } from '../../../common/dto/common.response.dto';
import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseEventDto extends CommonResponseDto {
  @ApiProperty()
  public title: string;
  @ApiProperty()
  public description: string;
  @ApiProperty()
  public url: string;
  @ApiProperty()
  public img: string;
  @ApiProperty()
  public date: Date;
  @ApiProperty()
  public location: string;
  @ApiProperty()
  public ticketUrl: string;
  @ApiProperty()
  public isFeatured: boolean;
  @ApiProperty()
  public isAvailable: boolean;

  constructor(
    id: ObjectId,
    title: string,
    description: string,
    url: string,
    img: string,
    date: Date,
    location: string,
    ticketUrl: string,
    isFeatured: boolean,
    isAvailable: boolean,
  ) {
    super(id);
    this.title = title;
    this.description = description;
    this.url = url;
    this.img = img;
    this.date = date;
    this.location = location;
    this.ticketUrl = ticketUrl;
    this.isFeatured = isFeatured;
    this.isAvailable = isAvailable;
  }
}
