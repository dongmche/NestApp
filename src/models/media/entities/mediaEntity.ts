// gallery.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/baseEntity';

@Entity()
export class MediaEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  image: string;

  @Column({ type: 'date' }) // 👈 explicitly set to 'date'
  date: Date;

  @Column()
  readingTime: string;
}
