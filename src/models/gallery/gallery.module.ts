import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GalleryEntity } from './entities/gallery.entity';
import { GalleryMapper } from './mapper/gallery.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([GalleryEntity])],
  controllers: [GalleryController],
  providers: [GalleryService, GalleryMapper],
  exports: [GalleryService, GalleryMapper],
})
export class GalleryModule {}
