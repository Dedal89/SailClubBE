import { hashPassword } from '@foal/core';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  async setPassword(password: string) {
    this.password = await hashPassword(password);
  }

  @Column()
  active: boolean;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @Column()
  lastLogin: Date;

  @Column()
  isAdmin: boolean;

  @Column()
  token: string;

}
