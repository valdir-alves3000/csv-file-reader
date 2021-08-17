import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Users } from "./Users";

@Entity("questions")
class Questions {

  @PrimaryColumn()
  readonly id: String;

  @Column()
  questionOne: String;

  @Column()
  questionTwo: String;

  @Column()
  questionThreen: String;

  @Column()
  questionThreenOne: String;

  @Column()
  questionThreenTwo: String;

  @Column()
  questionFour: String;

  @Column()
  user_id: String;

  @Column()
  month: String;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => Users)
  userId: Users;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Questions };