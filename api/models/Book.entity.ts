import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Author, Category, Review, User } from '.';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  isbn!: string;

  @Column()
  title!: string;

  @Column({
    type: 'text',
  })
  description!: string;

  @Column()
  releaseDate!: string;

  @Column()
  numberOfPages!: number;

  @Column()
  cover!: string;

  @OneToMany(() => Review, (review) => review.book)
  reviews!: Review[];

  @ManyToOne(() => Author, (author) => author.books)
  author!: Author;

  @ManyToMany(() => User, (user) => user.books)
  @JoinTable()
  users!: User[];

  @ManyToMany(() => Category)
  @JoinTable()
  categories!: Category[];
}
