import { Module } from "@nestjs/common";
import { UserModule } from "./users/users.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/models/user.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/models/role.model";
import { UserRole } from "./userRoles/userRole.model";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '6640225',
            database: 'nest-practice',
            models: [User, Role, UserRole],
            autoLoadModels: true,
          }),
          UserModule,
          RolesModule
    ]
})
export class AppModule {}
