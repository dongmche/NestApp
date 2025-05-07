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
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { ResponseBlogDto } from './dto/response-blog.dto';

@ApiTags('Blog')
@Controller('Blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @ApiOperation({ summary: 'Create a new blog item' })
  @ApiBearerAuth()
  @ApiBody({ type: CreateBlogDto })
  @ApiResponse({ status: 201, type: ResponseBlogDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createDto: CreateBlogDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseBlogDto> {
    return this.blogService.create(createDto, usercontext);
  }

  @ApiOperation({ summary: 'Get all blog items' })
  @ApiResponse({ status: 200, type: [ResponseBlogDto] })
  @Get()
  async findAll(): Promise<ResponseBlogDto[]> {
    return this.blogService.findAll();
  }

  @ApiOperation({ summary: 'Get a single blog item by ID' })
  @ApiResponse({ status: 200, type: ResponseBlogDto })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseBlogDto> {
    return this.blogService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a blog item' })
  @ApiBearerAuth()
  @ApiBody({ type: UpdateBlogDto })
  @ApiResponse({ status: 200, type: ResponseBlogDto })
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateBlogDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseBlogDto> {
    return this.blogService.update(id, updateDto, usercontext);
  }

  @ApiOperation({ summary: 'Delete a blog item' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Successfully deleted' })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @User() usercontext: UserContext,
  ): Promise<{ message: string }> {
    return this.blogService.remove(id, usercontext);
  }
}
