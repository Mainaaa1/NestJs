# Day 6 — Build User + Payments Microservices  
**Week 4 · NestJS**

---

## Objective

Build multiple NestJS microservices and connect them through an API Gateway.

By the end of this day:
- Each service runs independently
- Communication is message-based (TCP)
- HTTP requests are handled via a gateway
- Business logic is isolated per service

---

## Architecture
```bash
Client → API Gateway (HTTP)
↓
TCP Microservices
├── User Service
└── Payment Service
```

---

## Services Overview

### User Service
- Owns user data
- Responds to `get_users` messages
- Runs on port `3001`

### Payment Service
- Handles payment logic
- Responds to `process_payment`
- Runs on port `3002`

### API Gateway
- Exposes REST endpoints
- Communicates with services via TCP
- Runs on port `3000`

---

## Communication Pattern

- REST → API Gateway
- Gateway → Microservices (messages)
- Microservices → Gateway (responses)

No service knows about HTTP.

---

##  Endpoints

### Get Users

GET /api/users


### Process Payment

POST /api/payments

```json
{
"userId": 1,
"amount": 500
}
```
---

## Key Rules

- Microservices do NOT expose HTTP routes
- Each service owns its logic and data
- Communication is asynchronous
- API Gateway coordinates everything

---

## Key Takeaways

- NestJS microservices reuse the same DI system
- Message patterns replace REST routes
- API Gateway is the public interface
- This pattern scales cleanly

---
