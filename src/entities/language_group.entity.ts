import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class LanguageGroup {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

}