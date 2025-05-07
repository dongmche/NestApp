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
import { AboutUsService } from './aboutUs.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserContext } from '../../common/types/UserContext';
import { AuthGuard } from '@nestjs/passport';
import { ResponseAboutUsDto } from './dto/response-about-us.dto';
import { User } from '../../common/decorators/user.decorator';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';
import { CreateAboutUsDto } from './dto/create-about-us.dto';

@ApiTags('about-us-tab')
@Controller('about-us-tab')
export class AboutUsController {
  constructor(private readonly aboutUsService: AboutUsService) {}

  @ApiOperation({ summary: 'Create a new about-us item' })
  @ApiBearerAuth('access-token')
  @ApiBody({ type: CreateAboutUsDto })
  @ApiResponse({ status: 201, type: ResponseAboutUsDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createDto: CreateAboutUsDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseAboutUsDto> {
    return this.aboutUsService.create(createDto, usercontext);
  }

  @ApiOperation({ summary: 'Get all about-us items' })
  @ApiResponse({ status: 200, type: [ResponseAboutUsDto] })
  @Get()
  async findAll(): Promise<ResponseAboutUsDto[]> {
    return this.aboutUsService.findAll();
  }

  @ApiOperation({ summary: 'Get a single about-us item by ID' })
  @ApiResponse({ status: 200, type: ResponseAboutUsDto })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseAboutUsDto> {
    return this.aboutUsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a about-us item' })
  @ApiBearerAuth('access-token')
  @ApiBody({ type: UpdateAboutUsDto })
  @ApiResponse({ status: 200, type: ResponseAboutUsDto })
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateAboutUsDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseAboutUsDto> {
    return this.aboutUsService.update(id, updateDto, usercontext);
  }

  @ApiOperation({ summary: 'Delete a about-us item' })
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: 'Successfully deleted' })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @User() usercontext: UserContext,
  ): Promise<{ message: string }> {
    return this.aboutUsService.remove(id, usercontext);
  }
}
