import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

import { EventModule } from './models/event/event.module';
import { AboutUsTabModule } from './models/about-us-tab/about-us-tab.module';
import { GalleryModule } from './models/gallery/gallery.module';
import { MediaModule } from './models/media/mediaModule';
import { AuthModule } from './models/auth/auth.module';
import { UsersModule } from './models/users/usersModule';
import { BlogModule } from './models/blog/blogModule';

@Module({
  imports: [
    DatabaseModule,
    EventModule,
    GalleryModule,
    MediaModule,
    AboutUsTabModule,
    AuthModule,
    UsersModule,
    BlogModule,
  ],
})
export class AppModule {}
