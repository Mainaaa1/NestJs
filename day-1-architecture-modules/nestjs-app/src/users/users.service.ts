import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(u => u.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  create(dto: CreateUserDto) {
    const user = { id: Date.now(), ...dto };
    this.users.push(user);
    return user;
  }

  update(id: number, dto: UpdateUserDto) {
    const user = this.findOne(id);
    Object.assign(user, dto);
    return user;
  }

  remove(id: number) {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) throw new NotFoundException('User not found');
    this.users.splice(index, 1);
    return { message: 'User deleted' };
  }
}
