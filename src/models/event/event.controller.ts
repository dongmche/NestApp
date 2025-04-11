import { Controller } from '@nestjs/common';

import { EventEntity } from './entities/event.entity';
import { UpdateEventDto } from './dto/update-event.dto';
import { CreateEventDto } from './dto/create-event.dto';
import { ResponseEventDto } from './dto/response-event.dto';
import { GenericController } from '../generics/generic.controller';
import { EventService } from './event.service';

@Controller('events')
export class EventController extends GenericController<
  EventEntity,
  CreateEventDto,
  UpdateEventDto,
  ResponseEventDto
> {
  constructor(protected readonly eventService: EventService) {
    super(eventService); // Pass the service instance to parent
  }
}
