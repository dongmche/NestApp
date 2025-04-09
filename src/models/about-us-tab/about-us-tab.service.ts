import { CreateAboutUsTabDto } from './dto/create-about-us-tab.dto';
import { UpdateAboutUsTabDto } from './dto/update-about-us-tab.dto';
import { ResponseAboutUsTabDto } from './dto/response-about-us-tab.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { AboutUsTabEntity } from './entities/about-us-tab.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { mapEntityToDto } from './mapper/mapEntityToDto';
import { ObjectId } from 'mongodb';
import { RuntimeException } from '@nestjs/core/errors/exceptions';

@Injectable()
export class AboutUsTabService {
  constructor(
    @InjectRepository(AboutUsTabEntity)
    private readonly aboutUsTabEntityRepository: Repository<AboutUsTabEntity>,
  ) {}

  async create(
    createAboutUsTabDto: CreateAboutUsTabDto,
  ): Promise<ResponseAboutUsTabDto> {
    try {
      const aboutUsTabEntity: AboutUsTabEntity =
        this.aboutUsTabEntityRepository.create(createAboutUsTabDto);

      // Save the entity to the database
      const savedAboutUsTabEntity: AboutUsTabEntity =
        await this.aboutUsTabEntityRepository.save(aboutUsTabEntity);

      // Map the saved entity to the response DTO and return it
      return mapEntityToDto(savedAboutUsTabEntity);
    } catch (error) {
      // Check for a duplicate key error
      if (error.code === 11000) {
        throw new BadRequestException(
          'Duplicate key error: AboutUsTab with that name already exists',
        );
      }
      // Handle other errors with a default message if necessary
      const errorMessage: any = error.message || 'An unexpected error occurred';
      throw new BadRequestException(errorMessage);
    }
  }

  async findAll(): Promise<ResponseAboutUsTabDto[]> {
    return (await this.aboutUsTabEntityRepository.find()).map(mapEntityToDto);
  }

  async findOne(id: string): Promise<ResponseAboutUsTabDto> {
    try {
      const objectId = new ObjectId('67f43ffe47353da90daa5d6a');

      const aboutUsTabEntity = await this.aboutUsTabEntityRepository.findOne({
        where: { _id: objectId },
      });

      if (!aboutUsTabEntity) {
        throw new NotFoundException(`AboutUsTab with ID ${id} not found`);
      }
      return mapEntityToDto(aboutUsTabEntity);
    } catch (error) {
      if (error.message) {
        throw new BadRequestException(error.message);
      }
      throw new NotFoundException(
        `Most likely Invalid ID format or tab not found: ${id}`,
      );
    }
  }

  async update(
    id: string,
    updateAboutUsTabDto: UpdateAboutUsTabDto,
  ): Promise<ResponseAboutUsTabDto> {
    try {
      const objectId = new ObjectId(id);
      const existingTab = await this.aboutUsTabEntityRepository.findOne({
        where: { _id: objectId },
      });

      if (!existingTab) {
        throw new NotFoundException(`AboutUsTab with ID ${id} not found`);
      }

      // Update the entity
      await this.aboutUsTabEntityRepository.update(
        { _id: objectId },
        updateAboutUsTabDto,
      );

      // Retrieve the updated entity
      const updatedTab: AboutUsTabEntity | null =
        await this.aboutUsTabEntityRepository.findOne({
          where: { _id: objectId },
        });

      if (updatedTab !== null) {
        // Map and return the updated entity
        return mapEntityToDto(updatedTab);
      };

    } catch (error) {
      throw new BadRequestException(
        error.message || `Failed to update AboutUsTab with ID: ${id}`,
      );
    }
    throw new RuntimeException();
  }

  async remove(id: string): Promise<{ message: string }> {
    try {
      // Attempt to delete the event and check the result
      const result: DeleteResult =
        await this.aboutUsTabEntityRepository.delete(id);

      if (result.affected === 0) {
        throw new BadRequestException(`Event with id ${id} does not exist`);
      }

      // Return a success message if deletion was successful
      return { message: `AboutUsTab with id ${id} successfully deleted` };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
