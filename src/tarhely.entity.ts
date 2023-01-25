import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tarhely{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nev: string;
    @Column('int')
    meret: number;
    @Column('int')
    ar: number;
}