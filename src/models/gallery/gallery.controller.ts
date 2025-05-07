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
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { ResponseGalleryDto } from './dto/response-gallery.dto';
import { GalleryService } from './gallery.service';
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

@ApiTags('Gallery')
@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new gallery item' })
  @ApiBody({ type: CreateGalleryDto })
  @ApiResponse({ status: 201, type: ResponseGalleryDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createDto: CreateGalleryDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseGalleryDto> {
    return this.galleryService.create(createDto, usercontext);
  }

  @ApiResponse({ status: 200, type: [ResponseGalleryDto] })
  @ApiOperation({ summary: 'Get all gallery items' })
  @Get()
  async findAll(): Promise<ResponseGalleryDto[]> {
    return this.galleryService.findAll();
  }

  @ApiOperation({ summary: 'Get a single gallery item by ID' }) // instead of just "Get a gallery item"
  @ApiResponse({ status: 200, type: ResponseGalleryDto })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseGalleryDto> {
    return this.galleryService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a gallery item' })
  @ApiBearerAuth()
  @ApiBody({ type: UpdateGalleryDto })
  @ApiResponse({ status: 200, type: ResponseGalleryDto })
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateGalleryDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseGalleryDto> {
    return this.galleryService.update(id, updateDto, usercontext);
  }

  @ApiOperation({ summary: 'Delete a gallery item' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Successfully deleted' })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @User() usercontext: UserContext,
  ): Promise<{ message: string }> {
    return this.galleryService.remove(id, usercontext);
  }
}
