import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from "./user.entity";
import { LanguageGroup} from "./language_group.entity";


@Entity()
export class Language
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne(type => User, user => user.languages)
  user: User;

  @ManyToMany(type => LanguageGroup)
  @JoinTable()
  languageGroup: LanguageGroup[];
}