import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { config } from 'dotenv';
import { EventEntity } from 'src/models/event/entities/event.entity';
import { GalleryEntity } from './src/models/gallery/entities/gallery.entity';
import { UserEntity } from './src/models/users/entities/userEntity';
import { BlogEntity } from './src/models/blog/entities/blogEntity';
import { VenueEntity } from './src/models/venue/entities/venueEntity';
import { AboutUsTabentity } from './src/models/aboutUsTab/entities/aboutUsTabentity';

config(); // Load environment variables

const configService = new ConfigService();

export default new DataSource({
  type: 'mongodb', // Changed to 'mongodb'
  url: configService.get<string>('DATABASE_URL'), // Using the full URL directly
  database: configService.get<string>('DATABASE_NAME'),
  synchronize: true, // Do not use true in production
  logging: true,
  entities: [
    AboutUsTabentity,
    EventEntity,
    GalleryEntity,
    UserEntity,
    BlogEntity,
    VenueEntity,
  ], // Add your entities here
  migrations: ['dist/src/migrations/*.js'], // Path to compiled migration files
});
