import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "../../profile/entities/profile.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @OneToOne(()=> Profile, {cascade: true})
    @JoinColumn()
    profile : Profile;
}
