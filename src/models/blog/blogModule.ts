import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blogController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './entities/blogEntity';
import { BlogMapper } from './mapper/blog-mapper.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([BlogEntity])],
  controllers: [BlogController],
  providers: [BlogService, BlogMapper],
  exports: [BlogService, BlogMapper],
})
export class BlogModule {}
