// gallery.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/baseEntity';

@Entity()
export class AboutUsTabentity extends BaseEntity {
  @Column()
  value: string;

  @Column()
  geoLabel: string;

  @Column()
  engLabel: string;

  @Column()
  geoDescription: string;

  @Column()
  engDescription: string;

  constructor() {
    super();
  }
}
