import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { ResponseEventDto } from './dto/response-event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto): Promise<ResponseEventDto> {
    return this.eventService.create(createEventDto);
  }

  @Get()
  async findAll(): Promise<ResponseEventDto[]> {
    return this.eventService.findAll();
  }

  @Get(':id')
  async indOne(@Param('id') id: string): Promise<ResponseEventDto> {
    return this.eventService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() createEventDto: CreateEventDto) {
    return this.eventService.update(id, createEventDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.eventService.remove(id);
  }
}
