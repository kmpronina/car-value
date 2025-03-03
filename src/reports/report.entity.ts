import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  //   @Column()
  //   location: string;

  //   @Column()
  //   model: string;

  //   @Column()
  //   year: number;

  //   @Column()
  //   longtitude: number;

  //   @Column()
  //   latitude: number;

  //   @Column()
  //   mileage: number;
}
