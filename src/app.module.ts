import { Module } from "@nestjs/common";
import { UserModule } from "./users/users.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/models/user.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/models/role.model";
import { UserRole } from "./userRoles/userRole.model";
import { env } from "process";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: env.POSTGRES_HOST,
      port: +env.POSTGRES_PORT,
      username: env.POSTGRES_USERNAME,
      password: env.POSTGRES_PW,
      database: env.POSTGRES_DB,
      models: [User, Role, UserRole],
      autoLoadModels: true,
    }),
    UserModule,
    RolesModule,
    AuthModule,
  ],
})
export class AppModule {}
