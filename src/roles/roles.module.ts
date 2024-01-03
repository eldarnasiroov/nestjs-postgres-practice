import { Module } from "@nestjs/common";
import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./models/role.model";
import { User } from "src/users/models/user.model";
import { UserRole } from "src/userRoles/userRole.model";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([Role, User, UserRole])],
  exports: [RolesService]
})
export class RolesModule {}
