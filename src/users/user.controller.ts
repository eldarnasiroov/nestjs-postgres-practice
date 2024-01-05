import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUserDto";
import { UserService } from "./user.service";
import { AuthGuard } from "src/auth/guards/auth.guard";


@Controller('users')
export class UsersController {
    constructor(private userService: UserService) {}

    @Post()
    create (@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @UseGuards(AuthGuard)
    @Get()
    getAll () {
        return this.userService.getAllUsers();
    }
}