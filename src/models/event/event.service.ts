import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { EventEntity } from './entities/event.entity';
import { mapEntityToDto } from './mapper/mapEntityToDto';
import { ResponseEventDto } from './dto/response-event.dto';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<ResponseEventDto> {
    try {
      const event: EventEntity = this.eventRepository.create(createEventDto);
      const savedEntity: EventEntity = await this.eventRepository.save(event);
      return mapEntityToDto(savedEntity);
    } catch (error) {
      if (error.code != null && error.code === 11000) {
        throw new BadRequestException(
          'Duplicate key error: Event with that name already exists',
        );
      }
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<ResponseEventDto[]> {
    return (await this.eventRepository.find()).map(mapEntityToDto);
  }

  async findOne(id: string): Promise<ResponseEventDto> {
    try {
      const objectId = new ObjectId(id);
      const eventEntity = await this.eventRepository.findOneBy({
        _id: objectId,
      });

      if (!eventEntity) {
        throw new NotFoundException(`Event with ID ${id} not found`);
      }
      return mapEntityToDto(eventEntity);
    } catch (error) {
      console.log(error);
      throw new NotFoundException(
        `Most likely Invalid ID format or event not found: ${id}`,
      );
    }
  }

  async update(
    id: string,
    updateEventDto: CreateEventDto,
  ): Promise<EventEntity> {
    const objectId = new ObjectId(id);
    const updatedEvent = null;
    if (!updatedEvent) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    return updatedEvent;
  }

  async remove(id: string): Promise<{ message: string }> {
    try {
      // Attempt to delete the event and check the result
      const result: DeleteResult = await this.eventRepository.delete(id);

      if (result.affected === 0) {
        throw new BadRequestException(`Event with id ${id} does not exist`);
      }

      // Return a success message if deletion was successful
      return { message: `Event with id ${id} successfully deleted` };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
