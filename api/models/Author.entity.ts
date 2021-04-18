import { IsNotEmpty, IsString } from 'class-validator';
import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Book } from '.';

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  name!: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  surname!: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description!: string;

  @ManyToMany(() => Book, (book) => book.authors)
  books!: Book[];
}
