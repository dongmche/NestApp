import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities/baseEntity';

@Entity('aboutUsTab')
export class AboutUsTabEntity extends BaseEntity {
  @Column()
  geoValue: string;

  @Column()
  engValue: string;

  @Column()
  geoLabel: string;

  @Column()
  engLabel: string;

  @Column()
  geoDescription: string;

  @Column()
  engDescription: string;
}
