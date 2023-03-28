import { Entity, Column, PrimaryColumn } from 'typeorm';


@Entity('accountstats')
export class Account {
    @PrimaryColumn()
    userName!: string;

    @Column()
    lifetimePoints!: number;

    @Column()
    totalGuesses!: number;

    @Column()
    correctGuesses!: number;

    @Column()
    leaguesWon!: number;

    @Column()
    weeklyRank!: string;

    @Column()
    peakRank!: string;

    @Column()
    recentRank!: string;
}

export default Account;