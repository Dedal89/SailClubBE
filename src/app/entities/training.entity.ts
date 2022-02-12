// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Registry } from "."


export enum TrainingType {
  BEGINNER = "beginner",
  ADVANCED = "advanced",
  CRUISER = "cruiser"
}

@Entity()
export class Training extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: TrainingType,
    default: TrainingType.BEGINNER
  })
  boatType: TrainingType; 

  @ManyToOne(() => Registry, user => user.id)
  user: Registry;

}
