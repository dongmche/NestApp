// mappers/event.mapper.ts
import { EventEntity } from '../entities/event.entity';
import { ResponseEventDto } from '../dto/response-event.dto';
import { Injectable } from '@nestjs/common';
import { IMapper } from '../../generics/mapper';
import { CreateEventDto } from '../dto/create-event.dto';

@Injectable()
export class EventMapper
  implements IMapper<EventEntity, ResponseEventDto, CreateEventDto>
{
  toDto(entity: EventEntity): ResponseEventDto {
    return {
      id: entity._id,
      title: entity.title,
      description: entity.description,
      url: entity.url,
      img: entity.img,
      date: entity.date,
      location: entity.location,
      ticketUrl: entity.ticketUrl,
      isFeatured: entity.isFeatured,
      isAvailable: entity.isAvailable,
    };
  }

  toEntity(dto: CreateEventDto): EventEntity {
    const entity = new EventEntity();

    if (dto.title !== undefined) entity.title = dto.title;
    if (dto.description !== undefined) entity.description = dto.description;
    if (dto.url !== undefined) entity.url = dto.url;
    if (dto.img !== undefined) entity.img = dto.img;
    if (dto.date !== undefined) entity.date = dto.date;
    if (dto.location !== undefined) entity.location = dto.location;
    if (dto.ticketUrl !== undefined) entity.ticketUrl = dto.ticketUrl;
    if (dto.isFeatured !== undefined) entity.isFeatured = dto.isFeatured;
    if (dto.isAvailable !== undefined) entity.isAvailable = dto.isAvailable;

    return entity;
  }
}
