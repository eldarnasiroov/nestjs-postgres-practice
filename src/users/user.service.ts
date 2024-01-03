import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { CreateUserDto } from "./dto/createUserDto";
import { RolesService } from "src/roles/roles.service";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private roleService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userModel.create(dto);
    const role = await this.roleService.getRoleByValue("USER");
    await user.$set("roles", [role.id]);
    return user;
  }

  async getAllUsers() {
    const users = await this.userModel.findAll({ include: { all: true } });
    return users;
  }
}
