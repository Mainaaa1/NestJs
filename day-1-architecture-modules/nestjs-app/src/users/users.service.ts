import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [
      { id: 1, name: 'Ian' },
      { id: 2, name: 'NestJS Learner' },
    ];
  }

  findOne(id: number) {
    return { id, name: `User ${id}` };
  }
}
