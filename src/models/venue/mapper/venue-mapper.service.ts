// aboutUsTab.mapper.ts

import { Injectable } from '@nestjs/common';
import { IMapper } from '../../generics/mapper';
import { VenueEntity } from '../entities/venueEntity';
import { CreateVenueDto } from '../dto/create-venue.dto';
import { ResponseVenueDto } from '../dto/response-venue.dto';

@Injectable()
export class VenueMapper
  implements IMapper<VenueEntity, ResponseVenueDto, CreateVenueDto>
{
  toDto(entity: VenueEntity): ResponseVenueDto {
    return new ResponseVenueDto(
      entity._id,
      entity.image,
      entity.geoTitle,
      entity.engTitle,
      entity.geoDescription,
      entity.engDescription,
    );
  }

  toEntity(dto: CreateVenueDto): Partial<VenueEntity> {
    const entity = new VenueEntity();

    // Only assign if defined (allows null values)
    if (dto.image !== undefined) entity.image = dto.image;
    if (dto.geoTitle !== undefined) entity.geoTitle = dto.geoTitle;
    if (dto.engTitle !== undefined) entity.engTitle = dto.engTitle;
    if (dto.geoDescription !== undefined) entity.geoDescription = dto.geoDescription;
    if (dto.engDescription !== undefined) entity.engDescription = dto.engDescription;

    return entity;
  }
}
