import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FinancialInstitutionEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}