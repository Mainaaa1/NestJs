import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PaymentsController {
  @MessagePattern({ cmd: 'process_payment' })
  processPayment(data: { userId: number; amount: number }) {
    return {
      status: 'success',
      userId: data.userId,
      amount: data.amount,
    };
  }
}
