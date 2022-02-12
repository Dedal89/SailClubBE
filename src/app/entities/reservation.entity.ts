// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn , ManyToOne, ManyToMany, JoinTable, JoinColumn, OneToOne } from 'typeorm';
import { Boat, Registry } from '.';

export enum SlotType {
  MORNING = "morning",
  AFTERNOON = "afternoon",
  DAY = "day"
}

@Entity()
export class Reservation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Registry)
  @JoinColumn()
  user: Registry;

  @ManyToOne(() => Boat, boat => boat.id)
  boat: Boat;

  @ManyToMany(() => Registry)
  @JoinTable()
  crew: Registry[];

  @Column()
  reservationDate: Date;

  @CreateDateColumn()
  requestDate: Date;

  @Column({
    type: "enum",
    enum: SlotType,
    default: SlotType.DAY
  })
  slot: SlotType; 

  @Column()
  note: Text;

}
