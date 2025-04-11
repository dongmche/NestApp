import { CommonResponseDto } from '../../../common/dto/common.response.dto';
import { ObjectId } from 'mongodb';
import { IsString } from 'class-validator';

export class ResponseAboutUsDto extends CommonResponseDto {
  public value: string;
  public geoLabel: string;
  public engLabel: string;
  public geoDescription: string;
  public engDescription: string;

  constructor(
    id: ObjectId,
    value: string,
    geoLabel: string,
    engLabel: string,
    geoDescription: string,
    engDescription: string,
  ) {
    super(id);
    this.value = value;
    this.geoLabel = geoLabel;
    this.engLabel = engLabel;
    this.geoDescription = geoDescription;
    this.engDescription = engDescription;
  }
}
