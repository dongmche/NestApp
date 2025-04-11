import { GenericService } from './generic.service';
import { BaseEntity } from '../../common/entities/baseEntity';
import { CommonResponseDto } from '../../common/dto/common.response.dto';
import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../common/decorators/user.decorator';
import { UserContext } from '../../common/types/UserContext';
import { CommonCreateOrUpdateDto } from '../../common/dto/commonCreateOrUpdateDto';

export abstract class GenericController<
  EntityType extends BaseEntity,
  CreateDto extends CommonCreateOrUpdateDto,
  UpdateDto extends CommonCreateOrUpdateDto,
  ResponseDto extends CommonResponseDto,
> {
  constructor(
    protected readonly service: GenericService<
      EntityType,
      ResponseDto,
      CreateDto,
      UpdateDto
    >,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createGalleryDto: CreateDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseDto> {
    return this.service.create(createGalleryDto, usercontext);
  }

  @Get()
  async findAll(): Promise<ResponseDto[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseDto> {
    return this.service.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseDto> {
    return this.service.update(id, updateDto, usercontext);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string, @User() usercontext: UserContext):Promise<{message:string}> {
    return this.service.remove(id, usercontext);
  }
}
