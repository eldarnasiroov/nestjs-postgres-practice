import { Module, forwardRef } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UserService } from "./user.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { Role } from "src/roles/models/role.model";
import { UserRole } from "src/userRoles/userRole.model";
import { RolesModule } from "src/roles/roles.module";
import { AuthModule } from "src/auth/auth.module";

@Module({
  controllers: [UsersController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRole]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UserService],
})
export class UserModule {}
