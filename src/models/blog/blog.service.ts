import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic.service';
import { BlogEntity } from './entities/blogEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogMapper } from './mapper/blog-mapper.service';
import { ResponseBlogDto } from './dto/response-blog.dto';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService extends GenericService<
  BlogEntity,
  ResponseBlogDto,
  CreateBlogDto,
  UpdateBlogDto
> {
  constructor(
    @InjectRepository(BlogEntity)
    protected readonly repository: Repository<BlogEntity>,
    protected readonly mapper: BlogMapper,
  ) {
    super(repository, mapper, 'blog');
  }
}
