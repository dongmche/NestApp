import { Module } from '@nestjs/common';
import { AboutUsTabService } from './about-us-tab.service';
import { AboutUsTabController } from './about-us-tab.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutUsTabEntity } from './entities/about-us-tab.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AboutUsTabEntity])],
  controllers: [AboutUsTabController],
  providers: [AboutUsTabService],
  exports: [AboutUsTabService],
})
export class AboutUsTabModule {}
