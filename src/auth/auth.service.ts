import { UserService } from "./../users/user.service";
import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/users/dto/createUserDto";
import * as bcrypt from "bcryptjs";
import { User } from "src/users/models/user.model";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(dto: CreateUserDto) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

  async registration(dto: CreateUserDto) {
    const isUserExist = await this.userService.getUserByEmail(dto.email);

    if (isUserExist)
      throw new HttpException(
        "ПОльзователь с такой почтой уже существует",
        HttpStatus.BAD_REQUEST
      );

    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userService.createUser({
      ...dto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  private generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(dto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(dto.email);
    if(!user) this.handleUnauthorized()
    const isPasswordCorrect = await bcrypt.compare(
      dto.password,
      user?.password
    );
    if (user && isPasswordCorrect) return user;
    this.handleUnauthorized()
  }

  private handleUnauthorized(): never {
    throw new UnauthorizedException({ message: "Неверная почта или пароль" });
  }
}
