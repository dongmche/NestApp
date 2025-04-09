import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './models/users/users.module';
import { AuthModule } from './auth/auth.module';
import { VenuesModule } from './models/venues/venues.module';
import { EventModule } from './models/event/event.module';
import { AboutUsTabModule } from './models/about-us-tab/about-us-tab.module';
import { GalleryModule } from './models/gallery/gallery.module';
import { MediaModule } from './models/media/mediaModule';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    VenuesModule,
    EventModule,
    GalleryModule,
    MediaModule,
    AboutUsTabModule,
  ],
})
export class AppModule {}
