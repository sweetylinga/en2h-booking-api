# EN2H Booking API

A backend REST API for a Service Booking Platform built using **NestJS**, **Prisma ORM**, **PostgreSQL (Neon)**, and **JWT Authentication**.

---

## Live Demo

### Live API
https://en2h-booking-api.onrender.com

### Swagger Documentation
https://en2h-booking-api.onrender.com/api

### GitHub Repository
https://github.com/sweetylinga/en2h-booking-api

---

# Features

- User Registration
- User Login with JWT Authentication
- Protected Service APIs
- CRUD Operations for Services
- Booking Creation
- Booking Status Update
- Booking Deletion
- Prevent Booking Dates in the Past
- Prevent Cancelled → Completed Status Updates
- Global Validation Pipe
- Global Exception Filter
- Swagger API Documentation
- PostgreSQL Database using Prisma ORM

---

# Tech Stack

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL (Neon)
- JWT Authentication
- Swagger
- Render
- class-validator
- bcrypt

---

# API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /auth/register |
| POST | /auth/login |

---

## Services

| Method | Endpoint |
|---------|----------|
| POST | /services |
| GET | /services |
| GET | /services/:id |
| PUT | /services/:id |
| DELETE | /services/:id |

---

## Bookings

| Method | Endpoint |
|---------|----------|
| POST | /bookings |
| GET | /bookings |
| GET | /bookings/:id |
| PATCH | /bookings/:id/status |
| DELETE | /bookings/:id |

---

# Project Structure

```
src
│
├── auth
├── bookings
├── services
├── users
├── prisma
├── common
│   └── filters
└── main.ts
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/sweetylinga/en2h-booking-api.git
```

Move into the project

```bash
cd en2h-booking-api
```

Install dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file

```env
DATABASE_URL=your_postgresql_database_url

JWT_SECRET=mySecretKey

PORT=3000
```

---

# Prisma

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate deploy
```

For local development

```bash
npx prisma migrate dev
```

---

# Running the Application

Development

```bash
npm run start:dev
```

Production

```bash
npm run build
npm run start:prod
```

---

# Swagger Documentation

After running the application locally

```
http://localhost:3000/api
```

Production

```
https://en2h-booking-api.onrender.com/api
```

---

# Authentication

1. Register a user

```
POST /auth/register
```

2. Login

```
POST /auth/login
```

3. Copy the JWT Token

4. Click **Authorize** in Swagger

5. Enter

```
Bearer <your_token>
```

Now all protected Service endpoints can be accessed.

---

# Business Rules

- Booking date cannot be in the past.
- Cancelled bookings cannot be marked as Completed.
- Service endpoints are protected using JWT Guard.
- Request validation implemented using class-validator.
- Global exception filter handles application errors.

---

# Deployment

**Backend:** Render

https://en2h-booking-api.onrender.com

**Database:** Neon PostgreSQL

https://neon.tech

---

# Assignment Requirements Covered

- NestJS
- Prisma ORM
- PostgreSQL
- JWT Authentication
- CRUD APIs
- Validation
- Exception Filter
- Swagger
- Deployment
- GitHub Repository
- .env.example

---

# Author

**Linga Srilaxmi**

GitHub

https://github.com/sweetylinga

Repository

https://github.com/sweetylinga/en2h-booking-api

LinkedIn

https://www.linkedin.com/in/linga-srilaxmi

---

# License

This project was developed as part of the EN2H Backend Assignment.
