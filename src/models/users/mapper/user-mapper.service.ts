// aboutUsTab.mapper.ts

import { Injectable } from '@nestjs/common';
import { IMapper } from '../../generics/mapper';
import { UserEntity } from '../entities/userEntity';
import { CreateUserDto } from '../dto/create-user.dto';
import { ResponseUserDto } from '../dto/response-user.dto';
import { BlogEntity } from '../../blog/entities/blogEntity';

@Injectable()
export class UserMapper implements IMapper<UserEntity, ResponseUserDto, CreateUserDto> {
  toDto(entity: UserEntity): ResponseUserDto {
    return new ResponseUserDto(entity._id, entity.username, entity.roles);
  }

  toEntity(dto: CreateUserDto): UserEntity {
    const entity = new UserEntity();

    // Only assign if defined (allows null values)
    if (dto.username !== undefined) entity.username = dto.username;
    if (dto.password !== undefined) entity.password = dto.password;
    if (dto.roles !== undefined) entity.roles = dto.roles;

    return entity;
  }
}
