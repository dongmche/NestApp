import { CommonResponseDto } from '../../../common/dto/common.response.dto';
import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseAboutUsDto extends CommonResponseDto {
  @ApiProperty()
  public value: string;
  @ApiProperty()
  public engLabel: string;
  @ApiProperty()
  public geoLabel: string;
  @ApiProperty()
  public geoDescription: string;
  @ApiProperty()
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
