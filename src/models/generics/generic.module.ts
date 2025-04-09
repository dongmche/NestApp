import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenericService } from './generic.service';

@Module({
  imports: [TypeOrmModule.forFeature([])], // Import necessary entities if any
  providers: [GenericService],
  exports: [GenericService], // Key step: Make it available to other modules
})
export class CommonModule {}