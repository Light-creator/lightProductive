import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { userDto } from './dto/user-dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userModel: typeof User) {}

    async findAll(): Promise<User[]>{
        return this.userModel.findAll();
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userModel.findOne({where: {email}});
    }

    async findOne(id: number): Promise<User | undefined> {
        return this.userModel.findOne({where: {id}});
    }

    async create(dto: userDto): Promise<User | undefined> {
        return this.userModel.create({email: dto.email, password: dto.password});
    }
}
