// gallery.mapper.ts

import { Injectable } from '@nestjs/common';
import { IMapper } from '../../generics/mapper';
import { GalleryEntity } from '../entities/gallery.entity';
import { CreateGalleryDto } from '../dto/create-gallery.dto';
import { UpdateGalleryDto } from '../dto/update-gallery.dto';
import { ResponseGalleryDto } from '../dto/response-gallery.dto';

@Injectable()
export class GalleryMapper implements IMapper<GalleryEntity, ResponseGalleryDto> {
  toDto(entity: GalleryEntity): ResponseGalleryDto {
    const dto = new ResponseGalleryDto();
    dto.id = entity._id.toHexString();
    dto.title = entity.title;
    dto.images = entity.images;
    return dto;
  }

  toEntity(dto: CreateGalleryDto | UpdateGalleryDto): Partial<GalleryEntity> {
    return {
      title: dto.title,
      images: dto.images,
      ...(dto instanceof CreateGalleryDto && {
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    };
  }
}
