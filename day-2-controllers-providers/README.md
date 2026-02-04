# Day 2 — Controllers & Providers (NestJS)

## Overview
Day 2 introduces request handling and business logic separation in NestJS using controllers and providers.

This mirrors enterprise backend patterns used in frameworks like Spring Boot.

---

## Concepts Covered

- Controllers and routing
- Providers (services)
- Dependency Injection
- Request parameters
- Modular API design

---

## What Was Implemented

- Generated UsersController and UsersService
- Created REST endpoints:
  - GET /api/users
  - GET /api/users/:id
- Injected service into controller
- Returned mock JSON data

---

## Key Takeaways

- Controllers handle HTTP only
- Providers contain business logic
- Dependency injection is automatic
- Modules control visibility and wiring

---

## Notes

- No database integration yet
- Data is mocked intentionally
- Focus is on structure and flow

This setup forms the foundation for real APIs, databases, and microservices.
