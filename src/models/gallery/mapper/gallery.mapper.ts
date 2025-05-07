// aboutUsTab.mapper.ts

import { Injectable } from '@nestjs/common';
import { IMapper } from '../../generics/mapper';
import { GalleryEntity } from '../entities/gallery.entity';
import { CreateGalleryDto } from '../dto/create-gallery.dto';
import { ResponseGalleryDto } from '../dto/response-gallery.dto';

@Injectable()
export class GalleryMapper
  implements IMapper<GalleryEntity, ResponseGalleryDto, CreateGalleryDto>
{
  toDto(entity: GalleryEntity): ResponseGalleryDto {
    const dto = new ResponseGalleryDto(entity._id, entity.title);

    // it is optional
    if (entity.images !== undefined) dto.images = entity.images;
    if (entity.artists !== undefined) dto.artists = entity.artists;

    return dto;
  }

  toEntity(dto: CreateGalleryDto): GalleryEntity {
    const galleryEntity = new GalleryEntity();
    if (dto.images !== undefined) {
      galleryEntity.images = Array.isArray(galleryEntity.images)
        ? [...galleryEntity.images, ...dto.images]
        : [...dto.images]; // or just dto.images if already a new array
    }


    if (dto.artists !== undefined) galleryEntity.artists = dto.artists;
    if (dto.title !== undefined) galleryEntity.title = dto.title;
    return galleryEntity;
  }
}
