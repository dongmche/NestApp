import { CommonResponseDto } from '../../../common/dto/common.response.dto';
import { ObjectId } from 'mongodb';

export class ResponseUserDto extends CommonResponseDto {
  public username: string;
  public roles: string[];

  constructor(id: ObjectId, username: string, roles: string[]) {
    super(id);
    this.username = username;
    this.roles = roles;
  }
}
