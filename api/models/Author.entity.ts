import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Book } from '.';

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  surname!: string;

  @Column({
    type: 'text',
  })
  description!: string;

  @OneToMany(() => Book, (book) => book.author)
  books!: Book[];
}
