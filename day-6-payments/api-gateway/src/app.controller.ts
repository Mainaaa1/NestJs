import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api')
export class AppController {
  constructor(
    @Inject('USER_SERVICE') private userClient: ClientProxy,
    @Inject('PAYMENT_SERVICE') private paymentClient: ClientProxy,
  ) {}

  @Get('users')
  getUsers() {
    return this.userClient.send({ cmd: 'get_users' }, {});
  }

  @Post('payments')
  makePayment(@Body() body: { userId: number; amount: number }) {
    return this.paymentClient.send({ cmd: 'process_payment' }, body);
  }
}
