import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ObjectIdColumn,
} from 'typeorm';
import { ObjectId } from 'mongodb';

export abstract class CommonEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updateDate: Date;

  @Column({ nullable: true })
  updaterId: string;
}
