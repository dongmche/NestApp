import { Module } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { VenuesController } from './venues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VenueEntity } from './entities/venue.entity';


@Module({
  imports:[TypeOrmModule.forFeature([VenueEntity])],
  controllers: [VenuesController],
  providers: [VenuesService],
  exports: [VenuesService]
})
export class VenuesModule {}
