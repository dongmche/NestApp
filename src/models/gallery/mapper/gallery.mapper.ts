// gallery.mapper.ts

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
    return new ResponseGalleryDto(entity._id, entity.title, entity.images);
  }

  toEntity(dto: CreateGalleryDto): GalleryEntity {
    const galleryEntity = new GalleryEntity();
    galleryEntity.images = dto.images;
    galleryEntity.title = dto.title;
    return galleryEntity;
  }
}
