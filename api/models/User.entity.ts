import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Book, Review } from '.';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({
    nullable: true,
  })
  avatar!: string;

  @OneToMany(() => Review, (review) => review.user)
  reviews!: Review[];

  @ManyToMany(() => Book, (book) => book.users)
  books!: Book[];
}
