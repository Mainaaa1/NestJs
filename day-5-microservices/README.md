# Day 5 — Introduction to Microservices in NestJS  
**Week 4 · NestJS**

---

## Objective

Understand **what microservices are**, **why they are used**, and **how NestJS supports microservice architectures**.

By the end of this day, you should be able to:

- Explain monolith vs microservices
- Identify when microservices make sense
- Set up a basic NestJS microservice
- Understand transport layers (TCP, Redis, RabbitMQ, HTTP)

---

## Monolith vs Microservices

### Monolithic Architecture
- Single codebase
- Shared database
- Easier to start
- Harder to scale and maintain over time

### Microservices Architecture
- Multiple small services
- Each service has a single responsibility
- Services communicate over a network
- Independent scaling and deployment

---

## When to Use Microservices

Use microservices when:

- The application is large and complex
- Different modules scale differently
- Teams work independently
- You need fault isolation

Avoid microservices when:
- The app is small
- You’re early-stage
- You want rapid iteration without overhead

---

## How NestJS Supports Microservices

NestJS provides a **built-in microservices package** with:

- Multiple transport layers
- Message-based communication
- Same decorators & DI system
- Easy transition from REST → microservices

---

## Transport Layers in NestJS

| Transport | Use Case |
|---------|---------|
| TCP | Simple internal communication |
| Redis | Pub/Sub messaging |
| RabbitMQ | Event-driven systems |
| Kafka | High-throughput streaming |
| gRPC | Strongly typed contracts |
| HTTP | Public-facing APIs |

---

## Creating a Microservice (TCP Example)

### Install dependencies
```bash
npm install @nestjs/microservices
```

main.ts (Microservice Entry)
```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001,
    },
  });

  await app.listen();
}
bootstrap();
```

### Message-Based Controller

Microservices do not use HTTP routes.

They respond to messages.

Example Controller
```ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  @MessagePattern({ cmd: 'get_users' })
  getUsers() {
    return [{ id: 1, name: 'Ian' }];
  }
}
```
 Sending Messages (Client Side)
 ```ts
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

const client = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: { port: 3001 },
});

client.send({ cmd: 'get_users' }, {}).subscribe(console.log);
```
### REST API + Microservice Hybrid

Common pattern:

- REST API Gateway (HTTP)

- Microservices (business logic)

- Gateway forwards requests to services

This gives you:

- Clean separation

- External HTTP + internal messaging

- Better scalability

 Common Mistakes
- Using microservices too early

 Start monolith, evolve later

- Treating microservices like REST

 Think in messages and events

- Sharing databases across services

 Each service owns its data

## Key Takeaways

- Microservices are about boundaries, not technology

- NestJS makes microservices feel familiar

- Message-based communication is core

- REST and microservices can coexist

- Architecture decisions matter more than tools
