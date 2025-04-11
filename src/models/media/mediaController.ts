import { Controller } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { GenericController } from '../generics/generic.controller';
import { MediaEntity } from './entities/mediaEntity';
import { ResponseMediaDto } from './dto/response-media.dto';

@Controller('media')
export class MediaController extends GenericController<
  MediaEntity,
  CreateMediaDto,
  UpdateMediaDto,
  ResponseMediaDto
> {
  constructor(protected readonly mediaService: MediaService) {
    super(mediaService); // Pass the service instance to parent
  }
}
