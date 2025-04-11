import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

import { EventModule } from './models/event/event.module';
import { GalleryModule } from './models/gallery/gallery.module';
import { MediaModule } from './models/media/mediaModule';
import { AuthModule } from './models/auth/auth.module';
import { UsersModule } from './models/users/usersModule';
import { BlogModule } from './models/blog/blogModule';
import { VenueModule } from './models/venue/venueModule';
import { AboutUsModule } from './models/aboutUsTab/aboutUsModule';

@Module({
  imports: [
    DatabaseModule,
    EventModule,
    GalleryModule,
    MediaModule,
    AboutUsModule,
    AuthModule,
    UsersModule,
    BlogModule,
    VenueModule,
  ],
})
export class AppModule {}
