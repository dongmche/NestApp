// mappers/event.mapper.ts
import { EventEntity } from '../entities/event.entity';
import { ResponseEventDto } from '../dto/response-event.dto';

export function mapEntityToDto(entity: EventEntity): ResponseEventDto {
  return {
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
