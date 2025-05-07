import { CommonResponseDto } from '../../../common/dto/common.response.dto';
import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVenueDto extends CommonResponseDto {
  @ApiProperty()
  public image: string;

  @ApiProperty()
  public geoTitle: string;

  @ApiProperty()
  public engTitle: string;

  @ApiProperty()
  public geoDescription: string;

  @ApiProperty()
  public engDescription: string;

  constructor(
    id: ObjectId,
    image: string,
    geoTitle: string,
    engTitle: string,
    geoDescription: string,
    engDescription: string,
  ) {
    super(id);
    this.image = image;
    this.geoTitle = geoTitle;
    this.engTitle = engTitle;
    this.geoDescription = geoDescription;
    this.engDescription = engDescription;
  }
}
