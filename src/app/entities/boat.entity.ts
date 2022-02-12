// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum BoatType {
  BEGINNER = "beginner",
  ADVANCED = "advanced",
  CRUISER = "cruiser"
}

@Entity()
export class Boat extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  name: string;

  @Column()
  status: boolean;

  @Column()
  crewNumber: number;

  @Column()
  plate: string;

  @Column({
    type: "enum",
    enum: BoatType,
    default: BoatType.BEGINNER
  })
  boatType: BoatType; 



}
