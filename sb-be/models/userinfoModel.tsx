import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('logincreds')
export class userInfo {
   @PrimaryGeneratedColumn()
   id! : number;

    @Column()
    username!: string;

   @Column()
   email! : string;

   // secret
   @Column()
   password! : string;

}