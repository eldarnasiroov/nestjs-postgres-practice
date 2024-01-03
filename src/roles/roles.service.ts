import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./models/role.model";
import { CreateRolesDto } from "./dto/createRolesDto";


@Injectable() 
export class RolesService {
    constructor (@InjectModel(Role) private roleModel: typeof Role) {}

    async createRole(dto: CreateRolesDto) {
        const role = await this.roleModel.create(dto);
        return role;
    }
}