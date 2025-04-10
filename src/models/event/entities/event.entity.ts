import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from 'src/common/entities/baseEntity';

@Entity('event')
export class EventEntity extends BaseEntity {
  @Index({ unique: true })
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  img: string;

  @Column({ type: 'date' })
  date: Date;

  @Column()
  location: string;

  @Column()
  ticketUrl: string;

  @Column()
  isFeatured: boolean;

  @Column()
  isAvailable: boolean;
}
