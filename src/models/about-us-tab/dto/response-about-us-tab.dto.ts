import { ObjectId } from 'mongodb';
// import { CommonResponseDto } from '../../../common/dto/common.response.dto';

export class ResponseAboutUsTabDto {
  public id: ObjectId;
  public geoValue: string;
  public engValue: string;
  public geoLabel: string;
  public engLabel: string;
  public geoDescription: string;
  public engDescription: string;

  constructor(
    id: ObjectId,
    geoValue: string,
    engValue: string,
    geoLabel: string,
    engLabel: string,
    geoDescription: string,
    engDescription: string,
  ) {
    this.id = id;
    this.geoValue = geoValue;
    this.engValue = engValue;
    this.geoLabel = geoLabel;
    this.engLabel = engLabel;
    this.geoDescription = geoDescription;
    this.engDescription = engDescription;
  }
}
