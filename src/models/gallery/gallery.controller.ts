import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../decorators/user.decorator';
import { UserContext } from '../../common/types/UserContext';
import { CommonResponseDto } from '../../common/dto/common.response.dto';
import { ResponseGalleryDto } from './dto/response-gallery.dto';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createGalleryDto: CreateGalleryDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseGalleryDto> {
    return this.galleryService.create(createGalleryDto, usercontext);
  }

  @Get()
  async findAll() {
    return this.galleryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CommonResponseDto> {
    return this.galleryService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGalleryDto: UpdateGalleryDto,
    @User() usercontext: UserContext,
  ) {
    return this.galleryService.update(id, updateGalleryDto, usercontext);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string, @User() usercontext: UserContext) {
    return this.galleryService.remove(id, usercontext);
  }
}
