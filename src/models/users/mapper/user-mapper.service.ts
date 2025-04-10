// gallery.mapper.ts

import { Injectable } from '@nestjs/common';
import { IMapper } from '../../generics/mapper';
import { UserEntity } from '../entities/userEntity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ResponseUserDto } from '../dto/response-user.dto';

@Injectable()
export class UserMapper implements IMapper<UserEntity, ResponseUserDto, CreateUserDto> {
  toDto(entity: UserEntity): ResponseUserDto {
    return new ResponseUserDto(entity._id, entity.username, entity.roles);
  }

  toEntity(dto: CreateUserDto | UpdateUserDto): Partial<UserEntity> {
    return {
      username: dto.username,
      roles: dto.roles,
      ...(dto instanceof CreateUserDto && {
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    };
  }
}
