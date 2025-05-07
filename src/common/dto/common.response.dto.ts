import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';

export abstract class CommonResponseDto {
  @ApiProperty()
  public id?: ObjectId;
  public updaterUserName?: string;
  public creator?: string;
  public createDate?: Date;
  public updateDate?: Date;

  constructor(id: ObjectId) {
    this.id = id;
  }
}
