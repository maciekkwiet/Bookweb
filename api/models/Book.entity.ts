import { IsISBN, IsNotEmpty, IsString } from 'class-validator';
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Author, Category, Review, User } from '.';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @IsNotEmpty()
  @IsISBN()
  @Column()
  isbn!: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  title!: string;

  @Column({
    type: 'text',
  })
  description!: string;

  @IsNotEmpty()
  @Column()
  releaseDate!: string;

  @IsNotEmpty()
  @Column()
  numberOfPages!: number;

  @Column()
  cover!: string;

  @OneToMany(() => Review, (review) => review.book)
  reviews!: Review[];

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable()
  authors!: Author[];

  @ManyToMany(() => User, (user) => user.books)
  @JoinTable()
  users!: User[];

  @ManyToMany(() => Category)
  @JoinTable()
  categories!: Category[];
}
