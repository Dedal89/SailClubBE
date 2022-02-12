// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Type {
  BEGINNER = "beginner",
  ADVANCED = "advanced",
  CRUISER = "cruiser"
}

@Entity()
export class TrainingType extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: Type
  })
  boatType: Type; 

}
