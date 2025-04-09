import { Entity, ObjectIdColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';

@Entity()
export class UserEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  role: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
}



