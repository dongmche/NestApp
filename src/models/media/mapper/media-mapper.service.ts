// aboutUsTab.mapper.ts

import { Injectable } from '@nestjs/common';
import { IMapper } from '../../generics/mapper';
import { MediaEntity } from '../entities/mediaEntity';
import { CreateMediaDto } from '../dto/create-media.dto';
import { UpdateMediaDto } from '../dto/update-media.dto';
import { ResponseMediaDto } from '../dto/response-media.dto';
import { BlogEntity } from '../../blog/entities/blogEntity';

@Injectable()
export class MediaMapper
  implements IMapper<MediaEntity, ResponseMediaDto, CreateMediaDto>
{
  toDto(entity: MediaEntity): ResponseMediaDto {
    const dto = new ResponseMediaDto();
    dto.id = entity._id;
    dto.title = entity.title;
    dto.content = entity.content;
    dto.image = entity.image;
    dto.date = entity.date;
    dto.readingTime = entity.readingTime;
    return dto;
  }

  toEntity(dto: CreateMediaDto): MediaEntity {
    const entity = new MediaEntity();

    // Only assign if defined (allows null values)
    if (dto.title !== undefined) entity.title = dto.title;
    if (dto.content !== undefined) entity.content = dto.content;
    if (dto.image !== undefined) entity.image = dto.image;
    if (dto.date !== undefined) entity.date = dto.date;
    if (dto.readingTime !== undefined) entity.readingTime = dto.readingTime;

    return entity;
  }
}
