// generic.service.ts

import { CommonCreateOrUpdateDto } from '../../common/dto/commonCreateOrUpdateDto';
import { DeepPartial, DeleteResult, Repository } from 'typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { IMapper } from './mapper';
import { ObjectId } from 'mongodb';
import { CommonResponseDto } from '../../common/dto/common.response.dto';
import { UserContext } from '../../common/types/UserContext';
import { BaseEntity } from '../../common/entities/baseEntity';

export class GenericService<
  Entity extends BaseEntity,
  ResponseDto extends CommonResponseDto,
  ReqDto extends CommonCreateOrUpdateDto,
  UpdatoDto extends CommonCreateOrUpdateDto,
> {
  constructor(
    protected readonly repository: Repository<Entity>,
    protected readonly mapper: IMapper<Entity, ResponseDto, ReqDto>,
    protected readonly entityName: string = 'entity',
  ) {}

  async create(data: ReqDto, user?: UserContext): Promise<ResponseDto> {
    try {
      const dataEntity: Partial<Entity> = this.mapper.toEntity(data);
      const entity: Entity = this.repository.create(
        dataEntity as DeepPartial<Entity>,
      );

      if (user != null) {
        entity.updaterId = user?.username;
      }
      const savedEntity: Entity = await this.repository.save(entity);
      return this.mapper.toDto(savedEntity); // or use your DTO mapping here
    } catch (error) {
      if (error.code === 11000 || error.code === 'ER_DUP_ENTRY') {
        throw new BadRequestException(
          `Duplicate key error: ${this.entityName} with the given unique field already exists`,
        );
      }
      throw new BadRequestException(
        error.message || 'An unexpected error occurred',
      );
    }
  }

  async findAll(): Promise<ResponseDto[]> {
    return (await this.repository.find()).map(this.mapper.toDto);
  }

  async findOne(id: string): Promise<ResponseDto> {
    try {
      // Validate and convert ID
      let objectId: ObjectId;
      try {
        objectId = new ObjectId(id);
      } catch (err) {
        throw new BadRequestException('Invalid ID format');
      }

      // MongoDB-specific query
      const entity = await this.repository.findOne({
        where: { _id: objectId } as any, // Type assertion for MongoDB
      });

      if (!entity) {
        throw new NotFoundException(
          `${this.entityName} with ID ${id} not found`,
        );
      }

      // Ensure mapper is properly typed
      return this.mapper.toDto(entity);
    } catch (error) {
      // Improved error handling
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }

      throw new BadRequestException(
        error.message || `Error retrieving ${this.entityName} with ID `,
      );
    }
  }

  async update(
    id: string,
    updateDto: UpdatoDto, // Use your Update DTO type here
    user?: UserContext,
  ): Promise<ResponseDto> {
    // Return your Response DTO type
    try {
      const objectId = new ObjectId(id);
      const existingTab: Entity | null = await this.repository.findOne({
        where: { _id: objectId } as any,
      });

      if (!existingTab) {
        throw new NotFoundException(
          `${this.entityName} with ID ${id} not found`,
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

      // Retrieve the updated entity
      return await this.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new BadRequestException(
        error.message || `Failed to update ${this.entityName} with ID: ${id}`,
      );
    }

    // throw new RuntimeException();
  }

  async remove(id: string, user?: UserContext): Promise<{ message: string }> {
    try {
      // For MongoDB - convert string ID to ObjectId
      const objectId = new ObjectId(id);

      // Execute deletion
      const result: DeleteResult = await this.repository.delete({
        _id: objectId,
      } as any);

      if (result.affected === 0) {
        throw new NotFoundException(`${this.entityName}  with id ${id} not found`);
      }

      return {
        message: `${this.entityName} with id ${id} successfully deleted`,
      };
    } catch (error) {
      // Handle specific error cases
      if (error instanceof NotFoundException) {
        throw error;
      }

      if (error.message.includes('invalid')) {
        throw new BadRequestException('Invalid ID format');
      }

      throw new BadRequestException(
        error.message || `Failed to delete ${this.entityName} with ID: ${id}`,
      );
    }
  }
}
