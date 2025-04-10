import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic.service';
import { UserEntity } from './entities/userEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMapper } from './mapper/user-mapper.service';
import { ResponseUserDto } from './dto/response-user.dto';
import { comparePasswords } from '../../utils/hash.utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService extends GenericService<
  UserEntity,
  ResponseUserDto,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @InjectRepository(UserEntity)
    protected readonly repository: Repository<UserEntity>,
    protected readonly mapper: UserMapper,
  ) {
    super(repository, mapper);
  }

  async authenticateUser(
    username: string,
    password: string,
  ): Promise<ResponseUserDto | null> {
    const user: UserEntity | null = await this.repository.findOne({
      where: { username },
    });
    if (user != null) {
      if (await comparePasswords(password, user.password)) {
        return this.mapper.toDto(user);
      }
    }

    return null;
  }
}
