import { Controller } from '@nestjs/common';
import { GenericController } from '../generics/generic.controller';
import { UserEntity } from './entities/userEntity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseUserDto } from './dto/response-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UsersController extends GenericController<
  UserEntity,
  CreateUserDto,
  UpdateUserDto,
  ResponseUserDto
> {
  constructor(protected readonly userService: UserService) {
    super(userService); // Pass the service instance to parent
  }
}
