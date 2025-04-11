import { Controller } from '@nestjs/common';
import { GenericController } from '../generics/generic.controller';
import { GalleryEntity } from './entities/gallery.entity';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { ResponseGalleryDto } from './dto/response-gallery.dto';
import { GalleryService } from './gallery.service';

@Controller('gallery')
export class GalleryController extends GenericController<
  GalleryEntity,
  CreateGalleryDto,
  UpdateGalleryDto,
  ResponseGalleryDto
> {
  constructor(protected readonly galleryService: GalleryService) {
    super(galleryService); // Pass the service instance to parent
  }
}
