import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  @MessagePattern({ cmd: 'get_users' })
  getUsers() {
    return [
      { id: 1, name: 'Ian' },
      { id: 2, name: 'Alex' },
    ];
  }
}
