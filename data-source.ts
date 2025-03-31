import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from './src/users/entities/user.entity'; // Import your entities

import { config } from 'dotenv';
import { VenueEntity } from './src/venues/entities/venue.entity';

config(); // Load environment variables

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USER'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  synchronize: false, // Do not use true in production
  logging: true,
  entities: [UserEntity, VenueEntity], // Add your entities here
  migrations: ['dist/src/migrations/*.js'], // Path to compiled migration files
});
