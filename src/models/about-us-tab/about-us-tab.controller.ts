import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AboutUsTabService } from './about-us-tab.service';
import { CreateAboutUsTabDto } from './dto/create-about-us-tab.dto';
import { UpdateAboutUsTabDto } from './dto/update-about-us-tab.dto';
import { ResponseAboutUsTabDto } from './dto/response-about-us-tab.dto';

@Controller('about-us-tab')
export class AboutUsTabController {
  constructor(private readonly aboutUsTabService: AboutUsTabService) {}

  @Post()
  async create(@Body() createAboutUsTabDto: CreateAboutUsTabDto): Promise<ResponseAboutUsTabDto> {
    return this.aboutUsTabService.create(createAboutUsTabDto);
  }

  @Get()
  async findAll(): Promise<ResponseAboutUsTabDto[]> {
    return this.aboutUsTabService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ResponseAboutUsTabDto> {
    return this.aboutUsTabService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutUsTabDto: UpdateAboutUsTabDto): Promise<ResponseAboutUsTabDto> {
    return this.aboutUsTabService.update(id, updateAboutUsTabDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.aboutUsTabService.remove(id);
  }
}
