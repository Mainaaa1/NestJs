# Day 1 — NestJS Architecture & Modules

## Overview
Day 1 focuses on understanding the core architecture of NestJS and how modules structure a backend application.

NestJS follows an opinionated, modular architecture inspired by enterprise frameworks like Spring Boot.

---

## Concepts Covered

- NestJS project structure
- Application bootstrap (`main.ts`)
- Root module (`AppModule`)
- Feature modules
- `@Module()` decorator
- Modular backend design

---

## What Was Implemented

- Created a NestJS application using Nest CLI
- Explored default project structure
- Generated a `UsersModule`
- Registered the module in `AppModule`

---

## Key Takeaways

- Every NestJS app must have at least one module
- Modules group related controllers and providers
- NestJS uses dependency injection by default
- Architecture is enforced, not optional

---

## Notes

- No business logic yet
- No database yet
- Focus is purely on structure and understanding

This foundation will support controllers, services, and microservices later in the roadmap.
