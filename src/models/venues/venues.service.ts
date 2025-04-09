import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VenueEntity } from './entities/venue.entity';
import { Repository } from 'typeorm';
import { VenueDto } from './dto/venue-dto';

@Injectable()
export class VenuesService {

  constructor(
    @InjectRepository(VenueEntity)
    private readonly venueRepository: Repository<VenueEntity>,
  ){}

  async create(createVenueDto: CreateVenueDto): Promise<VenueDto> {
    const venue = this.venueRepository.save(createVenueDto);
    return venue;
  }

  async findAll(): Promise<VenueDto[]> {
    return this.venueRepository.find();
  }

  async findOne(id: number):Promise<VenueDto> {
    const venueDto = await this.venueRepository.findOneBy({id});
    if (!venueDto) {
      throw new NotFoundException(`Venue with ID ${id} not found`);
    }
    return venueDto;
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    return `This action updates a #${id} venue`;
  }

  async remove(id: number): Promise<{message:string}> {
    const venue = await this.venueRepository.findOneBy({ id });
    if (!venue) {
      throw new NotFoundException(`Venue with ID ${id} not found`);
    }

    await this.venueRepository.remove(venue);

    return { message: `Venue with ID ${id} deleted successfully` };
  }
}
