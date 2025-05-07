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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseUserDto } from './dto/response-user.dto';
import { UserService } from './user.service';
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
import { ConfigService } from '@nestjs/config';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, type: ResponseUserDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createDto: CreateUserDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseUserDto> {
    createDto.roles = [
      this.configService.get<string>('MODERATOR_ROLE') || 'moderator',
    ];
    return this.userService.create(createDto, usercontext);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({ status: 200, type: [ResponseUserDto] })
  @ApiOperation({ summary: 'Get all users' })
  @Get()
  async findAll(): Promise<ResponseUserDto[]> {
    return this.userService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get a single user  by ID' })
  @ApiResponse({ status: 200, type: ResponseUserDto })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseUserDto> {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a user' })
  @ApiBearerAuth()
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, type: ResponseUserDto })
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateUserDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseUserDto> {
    return this.userService.update(id, updateDto, usercontext);
  }

  @ApiOperation({ summary: 'Delete a user' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Successfully deleted' })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @User() usercontext: UserContext,
  ): Promise<{ message: string }> {
    return this.userService.remove(id, usercontext);
  }
}
