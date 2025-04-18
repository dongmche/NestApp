// gallery.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../common/entities/baseEntity';

@Entity()
export class BlogEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  image: string;

  @Column({ type: 'date' })
  date: Date;

  constructor() {
    super();
  }
}
