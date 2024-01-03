import { Body, Controller, Post } from "@nestjs/common";
import { CreateRolesDto } from "./dto/createRolesDto";
import { RolesService } from "./roles.service";

@Controller("roles")
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRolesDto) {
    return this.rolesService.createRole(dto);
  }
}
