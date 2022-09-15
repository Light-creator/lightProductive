import { Body, Controller, Get, Post } from '@nestjs/common';
import { userDto } from './dto/user-dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersSerivce: UsersService) {}

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersSerivce.findAll();
    }

    @Post()
    createUser(@Body() dto: userDto) {
        return this.usersSerivce.create(dto);
    }

}
