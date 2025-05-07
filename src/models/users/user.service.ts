import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GenericService } from '../generics/generic.service';
import { UserEntity } from './entities/userEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserMapper } from './mapper/user-mapper.service';
import { ResponseUserDto } from './dto/response-user.dto';
import { comparePasswords } from '../../utils/hash.utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserContext } from '../../common/types/UserContext';
import { ObjectId } from 'mongodb';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService extends GenericService<
  UserEntity,
  ResponseUserDto,
  CreateUserDto,
  UpdateUserDto
> {
  private readonly superAdminUsername: string;
  constructor(
    @InjectRepository(UserEntity)
    protected readonly repository: Repository<UserEntity>,
    protected readonly mapper: UserMapper,
    private readonly configService: ConfigService,
  ) {
    super(repository, mapper, 'user');
    this.superAdminUsername =
      this.configService.get<string>('ADMIN_USERNAME') || 'ADMIN';
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

  async update(
    id: string,
    updateDto: UpdateUserDto, // Use your Update DTO type here
    user?: UserContext,
  ): Promise<ResponseUserDto> {
    // instead of bla read a env file with config service and get a adminUSerName and compare it here

    // Return your Response DTO type
    try {
      const objectId = new ObjectId(id);
      const existingTab: UserEntity | null = await this.repository.findOne({
        where: { _id: objectId } as any,
      });

      if (!existingTab) {
        throw new NotFoundException(
          `${this.entityName} with ID ${id} not found`,
        );
      }

      if (existingTab.username === this.superAdminUsername) {
        throw new BadRequestException(
          `Failed to update ${this.entityName} with ID: ${id}, updating a superAdmin is not allowed`,
        );
      }

      const updated = this.repository.create({
        ...existingTab,
        ...updateDto,
      });

      if (user) {
        updated.updaterId = user.username;
      }

      await this.repository.save(updated);

      return await this.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new BadRequestException(
        error.message || `Failed to update ${this.entityName} with ID: ${id}`,
      );
    }
  }

  async remove(id: string, user?: UserContext): Promise<{ message: string }> {
    try {
      const objectId = new ObjectId(id);

      // Step 1: Find the user by ID
      const userToDelete: UserEntity | null = await this.repository.findOne({
        where: { _id: objectId } as any,
      });

      if (!userToDelete) {
        throw new NotFoundException(
          `${this.entityName} with id ${id} not found`,
        );
      }

      // Step 2: Prevent deletion of super admin
      if (userToDelete.username === this.superAdminUsername) {
        throw new BadRequestException(
          `Deletion of super admin  is not allowed, ${id} seems to be a super admin`,
        );
      }

      // Step 3: Proceed with deletion
      const result: DeleteResult = await this.repository.delete({
        _id: objectId,
      } as any);

      if (result.affected === 0) {
        throw new NotFoundException(
          `${this.entityName} with id ${id} not found`,
        );
      }

      return {
        message: `${this.entityName} with id ${id} successfully deleted`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;

      if (error.message.includes('invalid')) {
        throw new BadRequestException('Invalid ID format');
      }

      throw new BadRequestException(
        error.message || `Failed to delete ${this.entityName} with ID: ${id}`,
      );
    }
  }
}
