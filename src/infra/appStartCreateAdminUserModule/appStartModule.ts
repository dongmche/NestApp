// app.module.ts
import { Module } from '@nestjs/common';
import { RootAdminService } from './root.admin.service';
import { UsersModule } from '../../models/users/usersModule';

@Module({
  imports: [UsersModule],
  providers: [RootAdminService],
})
export class AppStartModule {}
