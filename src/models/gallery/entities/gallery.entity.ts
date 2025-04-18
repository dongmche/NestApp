// gallery.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/baseEntity';

@Entity()
export class GalleryEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  artists: string;

  @Column()
  images: string[]; // Array of image URLs or paths

  constructor() {
    super();
  }
}
