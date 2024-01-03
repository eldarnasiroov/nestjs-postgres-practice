import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Role } from "src/roles/models/role.model";
import { User } from "src/users/models/user.model";

@Table({timestamps: false})
export class UserRole extends Model<UserRole> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    type: DataType.INTEGER,
  })
  id: number; 

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;
}
