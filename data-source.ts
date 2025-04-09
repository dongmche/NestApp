import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from './src/models/users/entities/user.entity'; // Import your entities

import { config } from 'dotenv';
import { VenueEntity } from './src/models/venues/entities/venue.entity';
import { EventEntity } from 'src/models/event/entities/event.entity';
import { AboutUsTabEntity } from './src/models/about-us-tab/entities/about-us-tab.entity';
import { GalleryEntity } from './src/models/gallery/entities/gallery.entity';

config(); // Load environment variables

const configService = new ConfigService();

export default new DataSource({
  type: 'mongodb', // Changed to 'mongodb'
  url: configService.get<string>('DATABASE_URL'), // Using the full URL directly
  database: configService.get<string>('DATABASE_NAME'), 
  synchronize: true, // Do not use true in production
  logging: true,
  entities: [UserEntity, VenueEntity, EventEntity, AboutUsTabEntity, GalleryEntity], // Add your entities here
  migrations: ['dist/src/migrations/*.js'], // Path to compiled migration files
});

  