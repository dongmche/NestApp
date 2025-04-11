import { CommonResponseDto } from '../../../common/dto/common.response.dto';
import { ObjectId } from 'mongodb';

export class ResponseVenueDto extends CommonResponseDto {
  public image: string;
  public geoTitle: string;
  public engTitle: string;
  public geoDescription: string;
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
