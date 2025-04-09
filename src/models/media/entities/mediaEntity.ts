// gallery.entity.ts
import { Entity, Column } from 'typeorm';
import { CommonEntity } from '../../../common/entities/common.entity';

@Entity()
export class MediaEntity extends CommonEntity {
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
