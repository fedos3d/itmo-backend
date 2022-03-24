
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Language } from "./language.entity";
@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToMany( type => Language , book => book.user)
  languages: Language[];
}