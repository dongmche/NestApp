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
import { MediaService } from './media.service';

import { ResponseMediaDto } from './dto/response-media.dto';
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
import { UpdateMediaDto } from './dto/update-media.dto';
import { CreateMediaDto } from './dto/create-media.dto';

@ApiTags('Media')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new media item' })
  @ApiBody({ type: CreateMediaDto })
  @ApiResponse({ status: 201, type: ResponseMediaDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createDto: CreateMediaDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseMediaDto> {
    return this.mediaService.create(createDto, usercontext);
  }

  @ApiResponse({ status: 200, type: [ResponseMediaDto] })
  @ApiOperation({ summary: 'Get all media items' })
  @Get()
  async findAll(): Promise<ResponseMediaDto[]> {
    return this.mediaService.findAll();
  }

  @ApiOperation({ summary: 'Get a single media item by ID' })
  @ApiResponse({ status: 200, type: ResponseMediaDto })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseMediaDto> {
    return this.mediaService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a media item' })
  @ApiBearerAuth()
  @ApiBody({ type: UpdateMediaDto })
  @ApiResponse({ status: 200, type: ResponseMediaDto })
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateMediaDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseMediaDto> {
    return this.mediaService.update(id, updateDto, usercontext);
  }

  @ApiOperation({ summary: 'Delete a media item' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Successfully deleted' })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @User() usercontext: UserContext,
  ): Promise<{ message: string }> {
    return this.mediaService.remove(id, usercontext);
  }
}
