# Day 3 — Services & Dependency Injection (NestJS)

**Week 4 · NestJS**  
**Theme:** Services, Providers, and Dependency Injection

---

## Objective

The goal of Day 3 is to understand how **business logic is separated from controllers** in NestJS using **services**, and how **Dependency Injection (DI)** allows NestJS to manage dependencies cleanly and predictably.

By the end of this day, you should clearly understand:
- What services are
- How providers work
- How NestJS dependency injection functions
- How modules control dependency visibility

---

## Core Concepts Covered

- Services in NestJS
- Providers
- Dependency Injection (constructor injection)
- Module boundaries
- Shared (Common) modules

---

## Project Structure

By the end of Day 3, the project structure looks like this:

```
src/
├── common/
│ ├── common.module.ts
│ └── logger.service.ts
├── users/
│ ├── users.controller.ts
│ ├── users.service.ts
│ └── users.module.ts
├── app.module.ts
└── main.ts
```

---

## 🔧 Services in NestJS

A **service** is where business logic lives.  
Controllers should only:
- Accept requests
- Validate input
- Call services
- Return responses

### Example: Users Service

```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];
  }
}
```
## Dependency Injection (DI)

NestJS uses **constructor-based dependency injection** to manage dependencies automatically.

---

## Injecting a Service into a Controller

```ts
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }
}
```
NestJS automatically:

- Creates an instance of UsersService

- Injects it into the controller

- Manages its lifecycle

## Providers and Modules

Services must be registered inside a module in order to be injected.
```ts
users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

Without registering a service in providers, NestJS cannot inject it.

### Shared Services (Common Module)

When a service is needed in multiple modules, it must be:

- Declared in a module

- Exported from that module

- Imported wherever it’s needed

Logger Service
```
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(message: string) {
    console.log(`[LOG] ${message}`);
  }
}
```

common.module.ts
```
import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export class CommonModule {}

Importing the Common Module
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```
### Common Errors & Fixes
### Error
Nest can't resolve dependencies of UsersService

### Fix

- Ensure the service is listed in providers

- Ensure shared services are exported

- Ensure the module is imported

## Key Takeaways

- Controllers should be thin

- Services hold business logic

- Providers must be registered in modules

- Modules define visibility and scope

- Dependency Injection is automatic once configured correctly
