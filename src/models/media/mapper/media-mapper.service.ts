// gallery.mapper.ts

import { Injectable } from '@nestjs/common';
import { IMapper } from '../../generics/mapper';
import { MediaEntity } from '../entities/mediaEntity';
import { CreateMediaDto } from '../dto/create-media.dto';
import { UpdateMediaDto } from '../dto/update-media.dto';
import { ResponseMediaDto } from '../dto/response-media.dto';

@Injectable()
export class MediaMapper implements IMapper<MediaEntity, ResponseMediaDto> {
  toDto(entity: MediaEntity): ResponseMediaDto {
    const dto = new ResponseMediaDto();
    dto._id = entity._id.toHexString();
    dto.title = entity.title;
    dto.content = entity.content;
    dto.image = entity.image;
    dto.date = entity.date;
    dto.readingTime = entity.readingTime;
    return dto;
  }

  toEntity(dto: CreateMediaDto | UpdateMediaDto): Partial<MediaEntity> {
    return {
      title: dto.title,
      date: dto.date,
    };
  }
}
