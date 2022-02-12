// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { TrainingType } from ".";

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

  @OneToOne(() => TrainingType)
  @JoinColumn()
  trainingRequired: TrainingType;



}
