// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '.';

@Entity()
export class Registry extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  bday: Date;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  fivCard: number;
  
  @OneToOne(() => User)
  @JoinColumn()
  user: User;

}
