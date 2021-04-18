import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Book, User } from '.';

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  textContent!: string;

  @Column()
  rating!: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  addedAt!: Date;

  @ManyToOne(() => Book, (book) => book.reviews)
  book!: Book;

  @ManyToOne(() => User, (user) => user.reviews)
  user!: User;
}
