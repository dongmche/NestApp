import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venueController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VenueEntity } from './entities/venueEntity';
import { VenueMapper } from './mapper/venue-mapper.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([VenueEntity])],
  controllers: [VenueController],
  providers: [VenueService, VenueMapper],
  exports: [VenueService, VenueMapper],
})
export class VenueModule {}
