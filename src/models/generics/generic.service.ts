// generic.service.ts

import { CommonDto } from '../../common/dto/common.dto';
import { DeepPartial, DeleteResult, ObjectLiteral, Repository } from 'typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { IMapper } from './mapper';
import { ObjectId } from 'mongodb';
import { RuntimeException } from '@nestjs/core/errors/exceptions';

export class GenericService<T extends ObjectLiteral> {
  constructor(
    protected readonly repository: Repository<T>,
    protected readonly mapper: IMapper<T, CommonDto>,
  ) {}

  async create(data: DeepPartial<T>): Promise<CommonDto> {
    try {
      const entity: T = this.repository.create(data);
      const savedEntity: T = await this.repository.save(entity);
      return this.mapper.toDto(savedEntity); // or use your DTO mapping here
    } catch (error) {
      if (error.code === 11000 || error.code === 'ER_DUP_ENTRY') {
        throw new BadRequestException(
          'Duplicate key error: Entity with the given unique field already exists',
        );
      }
      throw new BadRequestException(
        error.message || 'An unexpected error occurred',
      );
    }
  }

  async findAll(): Promise<CommonDto[]> {
    return (await this.repository.find()).map(this.mapper.toDto);
  }

  async findOne(id: string): Promise<CommonDto> {
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
        throw new NotFoundException(`Entity with ID ${id} not found`);
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
        error.message || `Error retrieving entity with ID ${id}`,
      );
    }
  }

  async update(
    id: string,
    updateDto: Partial<CommonDto>, // Use your Update DTO type here
  ): Promise<CommonDto> {
    // Return your Response DTO type
    try {
      const objectId = new ObjectId(id);
      const existingTab: T | null = await this.repository.findOne({
        where: { _id: objectId } as any,
      });

      if (!existingTab) {
        throw new NotFoundException(`AboutUsTab with ID ${id} not found`);
      }

      // Update the entity
      await this.repository.update({ _id: objectId } as any, updateDto);

      // Retrieve the updated entity
      return await this.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new BadRequestException(
        error.message || `Failed to update entity with ID: ${id}`,
      );
    }

    throw new RuntimeException();
  }

  async remove(id: string): Promise<{ message: string }> {
    try {
      // For MongoDB - convert string ID to ObjectId
      const objectId = new ObjectId(id);

      // Execute deletion
      const result: DeleteResult = await this.repository.delete({
        _id: objectId,
      } as any);

      // For non-MongoDB databases, you can use:
      // const result = await this.repository.delete(id);

      if (result.affected === 0) {
        throw new NotFoundException(`Entity with id ${id} not found`);
      }

      return {
        message: `Entity with id ${id} successfully deleted`,
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
        error.message || `Failed to delete entity with ID: ${id}`,
      );
    }
  }
}
