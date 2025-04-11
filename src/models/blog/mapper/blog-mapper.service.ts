// aboutUsTab.mapper.ts

import { Injectable } from '@nestjs/common';
import { IMapper } from '../../generics/mapper';
import { BlogEntity } from '../entities/blogEntity';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { ResponseBlogDto } from '../dto/response-blog.dto';

@Injectable()
export class BlogMapper
  implements IMapper<BlogEntity, ResponseBlogDto, CreateBlogDto>
{
  toDto(entity: BlogEntity): ResponseBlogDto {
    const dto = new ResponseBlogDto(
      entity._id,
      entity.title,
      entity.content,
      entity.image,
      entity.date,
    );
    dto.updateDate = entity.updateDate;
    dto.createDate = entity.createDate;

    return dto;
  }

  toEntity(dto: CreateBlogDto): Partial<BlogEntity> {
    const entity = new BlogEntity();

    // Only assign if defined (allows null values)
    if (dto.title !== undefined) entity.title = dto.title;
    if (dto.content !== undefined) entity.content = dto.content;
    if (dto.image !== undefined) entity.image = dto.image;
    if (dto.date !== undefined) entity.date = dto.date;

    return entity;
  }
}
