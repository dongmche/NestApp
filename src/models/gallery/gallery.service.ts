import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic.service';
import { GalleryEntity } from './entities/gallery.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GalleryMapper } from './mapper/gallery.mapper';

@Injectable()
export class GalleryService extends GenericService<GalleryEntity> {
  constructor(
    @InjectRepository(GalleryEntity)
    protected readonly repository: Repository<GalleryEntity>,
    protected readonly mapper: GalleryMapper,
  ) {
    super(repository, mapper);
  }
}
