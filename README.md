

```md
# Task Manager SaaS (Fullstack)

Fullstack Task Management system built with:

- React (Vite)
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Multi-user architecture

---

## Architecture

```

task-manager/
├── frontend/   (React app)
├── backend/    (Express API + Prisma)

```

---

## Features

- User registration & login (JWT auth)
- Password hashing with bcrypt
- Protected routes
- Multi-user task ownership
- Full CRUD (Create, Read, Update, Delete)
- PostgreSQL relational database
- Prisma ORM
- Clean backend structure

---

## Backend Setup

```

cd backend
npm install
npx prisma migrate dev
node src/server.js

```

---

## Frontend Setup

```

cd frontend
npm install
npm run dev

```

---

## Tech Stack

Frontend:
- React
- Vite
- Axios

Backend:
- Express
- Prisma
- PostgreSQL
- JWT
- bcrypt

---

## Status

Checkpoint: v1-auth-working  
Database persistent.  
JWT authentication working.  
Multi-user architecture implemented.
```

