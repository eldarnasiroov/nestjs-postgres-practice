import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRole } from "src/userRoles/userRole.model";
import { User } from "src/users/models/user.model";


@Table
export class Role extends Model<Role> {
    @Column({unique: true, primaryKey: true, type: DataType.INTEGER, autoIncrement: true})
    id: number;

    @Column
    value: string;
    
    @Column
    description: string;

    @BelongsToMany(() => User, () => UserRole)
    users: User[]
}