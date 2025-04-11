import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic.service';
import { MediaEntity } from './entities/mediaEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MediaMapper } from './mapper/media-mapper.service';
import { ResponseMediaDto } from './dto/response-media.dto';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';

@Injectable()
export class MediaService extends GenericService<
  MediaEntity,
  ResponseMediaDto,
  CreateMediaDto,
  UpdateMediaDto
> {
  constructor(
    @InjectRepository(MediaEntity)
    protected readonly repository: Repository<MediaEntity>,
    protected readonly mapper: MediaMapper,
  ) {
    super(repository, mapper, 'media');
  }
}
