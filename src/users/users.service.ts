
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword, comparePasswords } from 'src/utils/hash.utils';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await hashPassword(createUserDto.password);
    return this.userRepository.save({...createUserDto, password : hashedPassword, role : process.env.ADMIN_ROLE});
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    const userEntity = await this.userRepository.findOneBy({id});
    if (!userEntity) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return userEntity;
  }
  

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async getByName(name: string){
      const userEntity = await this.userRepository.findOneBy({name});
      if (!userEntity) {
        throw new NotFoundException(`User with ID ${name} not found`);
      }
      return userEntity;

  }
}
