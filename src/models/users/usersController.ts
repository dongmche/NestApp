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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../decorators/user.decorator';
import { UserContext } from '../../common/types/UserContext';
import { CommonResponseDto } from '../../common/dto/common.response.dto';
import { hashPassword } from '../../utils/hash.utils';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @User() usercontext: UserContext,
  ): Promise<CommonResponseDto> {
    // hash password for user
    createUserDto.password = await hashPassword(createUserDto.password);
    return this.userService.create(createUserDto, usercontext);
  }

  @Get()
  async findAll(): Promise<CommonResponseDto[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CommonResponseDto> {
    return this.userService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGalleryDto: UpdateUserDto,
    @User() usercontext: UserContext,
  ): Promise<CommonResponseDto> {
    return this.userService.update(id, updateGalleryDto, usercontext);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string, @User() usercontext: UserContext) {
    return this.userService.remove(id, usercontext);
  }
}
