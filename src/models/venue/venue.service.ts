import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic.service';
import { VenueEntity } from './entities/venueEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VenueMapper } from './mapper/venue-mapper.service';
import { ResponseVenueDto } from './dto/response-venue.dto';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';

@Injectable()
export class VenueService extends GenericService<
  VenueEntity,
  ResponseVenueDto,
  CreateVenueDto,
  UpdateVenueDto
> {
  constructor(
    @InjectRepository(VenueEntity)
    protected readonly repository: Repository<VenueEntity>,
    protected readonly mapper: VenueMapper,
  ) {
    super(repository, mapper, 'venue');
  }
}
