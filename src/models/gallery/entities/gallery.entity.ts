// gallery.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/baseEntity';
import { ImageItem } from '../dto/image-item';

@Entity()
export class GalleryEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  artists: string;

  @Column({ type: 'array', default: [] })
  images: ImageItem[];

  constructor() {
    super();
  }
}
