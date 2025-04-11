import { Controller } from '@nestjs/common';
import { GenericController } from '../generics/generic.controller';
import { ResponseBlogDto } from './dto/response-blog.dto';
import { BlogEntity } from './entities/blogEntity';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogService } from './blog.service';

@Controller('blogs')
export class BlogController extends GenericController<
  BlogEntity,
  CreateBlogDto,
  UpdateBlogDto,
  ResponseBlogDto
> {
  constructor(protected readonly blogService: BlogService) {
    super(blogService); // Pass the service instance to parent
  }
}
