import { Controller } from '@nestjs/common';
import { GenericController } from '../generics/generic.controller';
import { ResponseVenueDto } from './dto/response-venue.dto';
import { VenueEntity } from './entities/venueEntity';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { VenueService } from './venue.service';

@Controller('venues')
export class VenueController extends GenericController<
  VenueEntity,
  CreateVenueDto,
  UpdateVenueDto,
  ResponseVenueDto
> {
  constructor(protected readonly venueService: VenueService) {
    // Changed variable name to blogService
    super(venueService); // Pass the service instance to parent
  }
}
