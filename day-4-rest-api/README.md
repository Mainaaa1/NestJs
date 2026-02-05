# Day 4 — Building REST APIs in NestJS  
**Week 4 · NestJS**

---

## Objective

Learn how to build **proper REST APIs in NestJS** using controllers, services, DTOs, validation, and HTTP status codes.

By the end of this day, the API should:

- Follow REST conventions
- Use DTOs for request/response structure
- Validate incoming data
- Separate concerns cleanly (Controller vs Service)

---

## REST API Structure in NestJS

A typical NestJS REST feature consists of:

```bash
users/
├── dto/
│ ├── create-user.dto.ts
│ └── update-user.dto.ts
├── users.controller.ts
├── users.service.ts
├── users.module.ts
```

---

## 📡 REST Endpoints Overview

| Method | Endpoint        | Description            |
|------:|------------------|------------------------|
| GET   | /api/users       | Get all users          |
| GET   | /api/users/:id   | Get user by ID         |
| POST  | /api/users       | Create a new user      |
| PUT   | /api/users/:id   | Update a user          |
| DELETE| /api/users/:id   | Delete a user          |

---

## 🧾 DTOs (Data Transfer Objects)

DTOs define **what data is allowed** in requests.

### `create-user.dto.ts`

```ts
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
```
## Key Takeaways

- Controllers handle HTTP, not logic

- Services contain business rules

- DTOs protect your API

- Validation is essential

- NestJS enforces clean architecture by design
