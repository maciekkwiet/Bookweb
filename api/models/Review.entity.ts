import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

import { Book, User } from '.';

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @IsNotEmpty()
  @Column()
  textContent!: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  rating!: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: Date;

  @IsNotEmpty()
  @ManyToOne(() => Book, (book) => book.reviews)
  book!: Book;

  @IsNotEmpty()
  @ManyToOne(() => User, (user) => user.reviews)
  user!: User;
}
