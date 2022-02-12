// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Registry } from ".";

@Entity()
export class MedicalDocument extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Registry, user => user.id)
  user: Registry;

  @CreateDateColumn()
  requestDate: Date;

  @Column()
  expirationDate: Date;

  @Column()
  note: Text;

}
