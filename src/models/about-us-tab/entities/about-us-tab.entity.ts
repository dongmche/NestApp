import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../../../common/entities/common.entity';

@Entity('aboutUsTab')
export class AboutUsTabEntity extends CommonEntity {
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
