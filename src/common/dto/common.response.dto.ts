import { ObjectId } from 'mongodb';

export abstract class CommonResponseDto {
  public id?: ObjectId;
  public updaterUserName?: string;
  public creator?: string;
  public createDate?: Date;
  public updateDate?: Date;

  constructor(id: ObjectId) {
    this.id = id;
  }
}
