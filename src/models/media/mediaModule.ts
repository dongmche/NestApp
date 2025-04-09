import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './mediaController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaEntity } from './entities/mediaEntity';
import { MediaMapper } from './mapper/media-mapper.service';

@Module({
  imports: [TypeOrmModule.forFeature([MediaEntity])],
  controllers: [MediaController],
  providers: [MediaService, MediaMapper],
  exports: [MediaService, MediaMapper],
})
export class MediaModule {}
