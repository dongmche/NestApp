import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { EventEntity } from './entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventMapper } from './mapper/event-mapper';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity])],
  controllers: [EventController],
  providers: [EventService, EventMapper],
  exports: [EventService, EventMapper],
})
export class EventModule {}
