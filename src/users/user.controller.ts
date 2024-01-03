import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUserDto";
import { UserService } from "./user.service";


@Controller('users')
export class UsersController {
    constructor(private userService: UserService) {}

    @Post()
    create (@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @Get()
    getAll () {
        return this.userService.getAllUsers();
    }
}