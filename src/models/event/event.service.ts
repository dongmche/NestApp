import {
  Injectable,
} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from './entities/event.entity';
import { EventMapper } from './mapper/event-mapper';
import { ResponseEventDto } from './dto/response-event.dto';
import { GenericService } from '../generics/generic.service';

import { UpdateEventDto } from './dto/update-event.dto';
import { Repository } from 'typeorm';

@Injectable()
export class EventService extends GenericService<
  EventEntity,
  ResponseEventDto,
  CreateEventDto,
  UpdateEventDto
> {
  constructor(
    @InjectRepository(EventEntity)
    protected readonly repository: Repository<EventEntity>,
    protected readonly mapper: EventMapper,
  ) {
    super(repository, mapper);
  }
}
