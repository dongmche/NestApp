// aboutUsTab.mapper.ts

import { Injectable } from '@nestjs/common';
import { IMapper } from '../../generics/mapper';
import { AboutUsTabentity } from '../entities/aboutUsTabentity';
import { CreateAboutUsDto } from '../dto/create-about-us.dto';
import { ResponseAboutUsDto } from '../dto/response-about-us.dto';

@Injectable()
export class AboutUsMapper
  implements IMapper<AboutUsTabentity, ResponseAboutUsDto, CreateAboutUsDto>
{
  toDto(entity: AboutUsTabentity): ResponseAboutUsDto {
    return new ResponseAboutUsDto(
      entity._id,
      entity.value,
      entity.geoLabel,
      entity.engLabel,
      entity.geoDescription,
      entity.engDescription,
    );
  }

  toEntity(dto: CreateAboutUsDto): AboutUsTabentity {
    const entity = new AboutUsTabentity();
    entity.value = dto.value;
    entity.geoLabel = dto.geoLabel;
    entity.engLabel = dto.engLabel;
    entity.geoDescription = dto.geoDescription;
    entity.engDescription = dto.engDescription;
    return entity;
  }
}
