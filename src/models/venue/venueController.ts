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
import { ResponseVenueDto } from './dto/response-venue.dto';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { VenueService } from './venue.service';
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

@ApiTags('Venue')
@Controller('venues')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Create a new venue item' })
  @ApiBody({ type: CreateVenueDto })
  @ApiResponse({ status: 201, type: ResponseVenueDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createDto: CreateVenueDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseVenueDto> {
    return this.venueService.create(createDto, usercontext);
  }

  @ApiResponse({ status: 200, type: [ResponseVenueDto] })
  @ApiOperation({ summary: 'Get all venue items' })
  @Get()
  async findAll(): Promise<ResponseVenueDto[]> {
    return this.venueService.findAll();
  }

  @ApiOperation({ summary: 'Get a single venue item by ID' })
  @ApiResponse({ status: 200, type: ResponseVenueDto })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseVenueDto> {
    return this.venueService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a venue item' })
  @ApiBearerAuth('access-token')
  @ApiBody({ type: UpdateVenueDto })
  @ApiResponse({ status: 200, type: ResponseVenueDto })
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateVenueDto,
    @User() usercontext: UserContext,
  ): Promise<ResponseVenueDto> {
    return this.venueService.update(id, updateDto, usercontext);
  }

  @ApiOperation({ summary: 'Delete a venue item' })
  @ApiBearerAuth('access-token')
  @ApiResponse({ status: 200, description: 'Successfully deleted' })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @User() usercontext: UserContext,
  ): Promise<{ message: string }> {
    return this.venueService.remove(id, usercontext);
  }
}
