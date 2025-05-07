import { CommonResponseDto } from '../../../common/dto/common.response.dto';
import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseUserDto extends CommonResponseDto {
  @ApiProperty()
  public username: string;
  @ApiProperty()
  public roles: string[];

  constructor(id: ObjectId, username: string, roles: string[]) {
    super(id);
    this.username = username;
    this.roles = roles;
  }
}
