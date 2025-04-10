import { ObjectId } from 'mongodb';

export abstract class CommonResponseDto {
  public id?: ObjectId;
  public updaterUserName?: string;
  public creator?: string;

  constructor(id: ObjectId) {
    this.id = id;
  }
}
