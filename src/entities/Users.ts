import {  Entity,  Column,  PrimaryColumn,} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('users')
class Users {

  @PrimaryColumn()
  id: String;

  @Column()
  age: Number;

  @Column()
  sex: String;

  @Column()
  school: String;

  @Column()
  area: String;

  @Column()
  office: String;
}

export { Users };
