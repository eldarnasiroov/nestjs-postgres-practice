import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserData {
  email: string;
  password: string;
}

@Table
export class User extends Model<User, UserData> {
  @Column({
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: false })
  password: string; 
}
