import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

import { Book, User } from '.';

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @IsNotEmpty()
  @Column()
  textContent!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(5)
  @Column()
  rating!: number;

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
