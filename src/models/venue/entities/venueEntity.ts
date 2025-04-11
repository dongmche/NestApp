// gallery.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/baseEntity';

@Entity()
export class VenueEntity extends BaseEntity {
  @Column()
  image: string;

  @Column()
  geoTitle: string;

  @Column()
  engTitle: string;

  @Column()
  geoDescription: string;

  @Column()
  engDescription: string;

  constructor() {
    super();
  }
}
