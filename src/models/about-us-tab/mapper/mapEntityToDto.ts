import { AboutUsTabEntity } from '../entities/about-us-tab.entity';
import { ResponseAboutUsTabDto } from '../dto/response-about-us-tab.dto';

export function mapEntityToDto(
  entity: AboutUsTabEntity,
): ResponseAboutUsTabDto {
  return {
    id: entity._id,
    geoValue: entity.geoValue,
    engValue: entity.engValue,
    geoLabel: entity.geoLabel,
    engLabel: entity.engLabel,
    geoDescription: entity.geoDescription,
    engDescription: entity.engDescription,
  };
}
