import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table
export class Role extends Model<Role> {
    @Column({unique: true, primaryKey: true, type: DataType.INTEGER, autoIncrement: true})
    id: number;

    @Column
    value: string;
    
    @Column
    description: string;
}