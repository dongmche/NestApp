// src/venue/entities/venue.entity.ts
import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity()
export class VenueEntity extends BaseEntity {

  @Column({ unique: true })  
  name: string;

  @Column()
  location: string;

  @Column({ nullable: true })
  capacity?: number;
}
