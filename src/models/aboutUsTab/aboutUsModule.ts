import { Module } from '@nestjs/common';
import { AboutUsService } from './aboutUs.service';
import { AboutUsController } from './aboutUsController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutUsTabentity } from './entities/aboutUsTabentity';
import { AboutUsMapper } from './mapper/aboutUsTab.mapper';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([AboutUsTabentity])],
  controllers: [AboutUsController],
  providers: [AboutUsService, AboutUsMapper],
  exports: [AboutUsService, AboutUsMapper],
})
export class AboutUsModule {}
