import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { VenuesModule } from './venues/venues.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, VenuesModule],
  providers: [AppService],
})
export class AppModule {}
