import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/createUserDto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() dto: CreateUserDto) {
        return this.authService.login(dto)
    }

    @Post('/registration')
    registration(@Body() dto: CreateUserDto) {
        return this.authService.registration(dto);
    }
}
