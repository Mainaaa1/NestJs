# Week 4 — NestJS (Backend Architecture & Microservices)

**Duration:** 2 Feb – 8 Feb 2026  
**Theme:** NestJS Architecture, REST APIs, and Microservices Fundamentals

---

## Overview

Week 4 focused on **NestJS**, a progressive Node.js framework built on top of TypeScript.  
The goal of this week was to move from simple controllers to **well-structured, scalable backend architecture**, and finally introduce **microservices communication**.

This week emphasized:
- Structure over shortcuts
- Explicit module boundaries
- Dependency Injection as a first-class concept
- Message-based communication between services

---

## Week Goals

By the end of Week 4, the objectives were to:

- Understand NestJS project structure
- Use Modules, Controllers, and Services correctly
- Apply Dependency Injection properly
- Build REST APIs in NestJS
- Introduce microservices using TCP transport
- Separate concerns between API Gateway and backend services

---

## Daily Breakdown

### **Day 1 — NestJS Architecture & Modules**
**Key Concepts**
- NestJS folder structure
- Modules as the building block of applications
- Root module (`AppModule`)
- Feature modules

**Outcome**
- Understood how NestJS organizes applications
- Learned why everything must belong to a module

---

### **Day 2 — Controllers & Providers**
**Key Concepts**
- Controllers handle incoming requests
- Providers (services) contain business logic
- Decorators like `@Controller`, `@Get`, `@Post`

**Outcome**
- Built basic controllers
- Learned separation of concerns between routing and logic

---

### **Day 3 — Services & Dependency Injection**
**Key Concepts**
- Constructor-based Dependency Injection
- `@Injectable()` services
- Providers registration
- Shared services via a Common Module

**Outcome**
- Learned how NestJS automatically resolves dependencies
- Understood why services must be registered and exported properly

---

### **Day 4 — Building REST APIs in NestJS**
**Key Concepts**
- REST endpoints with controllers
- Request/response lifecycle
- DTOs and clean controller design

**Outcome**
- Built structured REST APIs
- Controllers remained thin while logic lived in services

---

### **Day 5 — Introduction to Microservices**
**Key Concepts**
- Microservices vs Monoliths
- Message-based communication
- TCP transport in NestJS
- `@MessagePattern`

**Outcome**
- Learned that microservices do NOT use HTTP routes
- Understood how services communicate via messages

---

### **Day 6 — Build User + Payments Services**
**Key Concepts**
- Separate NestJS applications for each service
- API Gateway pattern
- ClientProxy for inter-service communication

**Architecture**
```json
API Gateway (HTTP)
↓
User Service (TCP)
↓
Payments Service (TCP)
```


**Outcome**
- Created User and Payments microservices
- Learned where modules and controllers belong
- Fixed common pitfalls like missing modules/controllers

---

### **Day 7 — Final Review & Notes**
**Key Takeaways**
- Modules define visibility and scope
- Controllers should not contain business logic
- Services are injectable and reusable
- Microservices communicate via messages, not routes
- Explicit structure prevents hidden bugs

---

## Key Lessons Learned

- NestJS enforces good architecture by design
- Dependency Injection removes tight coupling
- Microservices require **clear boundaries**
- Errors usually mean something was not registered or imported
- Structure early saves refactoring later

---

## Common Pitfalls Encountered

- Forgetting to create feature modules/controllers
- Expecting HTTP routes to work inside microservices
- Not importing/exporting shared modules
- Confusing REST controllers with message handlers

---

## Final Thoughts

Week 4 marked a major shift from “making things work” to **building things correctly**.

NestJS forces discipline:
- No shortcuts
- No hidden magic
- Clear ownership of logic

This foundation makes scaling, testing, and extending applications significantly easier in later stages.

Week 5 will build on this with more advanced backend patterns and real-world integrations.

---

**End of Week 4**
