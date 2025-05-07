import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { UpdateEventDto } from './dto/update-event.dto';
import { CreateEventDto } from './dto/create-event.dto';
import { ResponseEventDto } from './dto/response-event.dto';
import { EventService } from './event.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../common/decorators/user.decorator';
import { UserContext } from '../../common/types/UserContext';

@ApiTags('Events')
@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({ summary: 'Create a new event item' })
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateEventDto })
  @ApiResponse({ status: 201, type: ResponseEventDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createDto: CreateEventDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseEventDto> {
    return this.eventService.create(createDto, usercontext);
  }

  @ApiOperation({ summary: 'Get all events items' })
  @ApiResponse({ status: 200, type: [ResponseEventDto] })
  @Get()
  async findAll(): Promise<ResponseEventDto[]> {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: 'Get a single event item by ID' })
  @ApiResponse({ status: 200, type: ResponseEventDto })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseEventDto> {
    return this.eventService.findOne(id);
  }

  @ApiOperation({ summary: 'Update an event item' })
  @ApiBearerAuth('access-token')
  @ApiBody({ type: UpdateEventDto })
  @ApiResponse({ status: 200, type: ResponseEventDto })
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateEventDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseEventDto> {
    return this.eventService.update(id, updateDto, usercontext);
  }

  @ApiOperation({ summary: 'Delete an event item' })
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: 'Successfully deleted' })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @User() usercontext: UserContext,
  ): Promise<{ message: string }> {
    return this.eventService.remove(id, usercontext);
  }
}
