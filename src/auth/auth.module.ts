import { Module, forwardRef } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: "24h",
      },
    }),
    forwardRef(() => UserModule),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
