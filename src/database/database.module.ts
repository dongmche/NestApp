import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSource from '../../data-source'; // Adjust the path as needed

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource.options),  // Use the same data source configuration
  ],
})
export class DatabaseModule {}
