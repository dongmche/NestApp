// gallery.entity.ts
import { Entity, Column } from 'typeorm';
import { CommonEntity } from '../../../common/entities/common.entity';

@Entity()
export class GalleryEntity extends CommonEntity {
  @Column()
  title: string;

  @Column()
  artists: string;

  @Column()
  images: string[]; // Array of image URLs or paths
}
