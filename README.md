```md
# Task Manager SaaS (Fullstack)

A fullstack Task Management system built with a modern production-ready stack.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Axios

### Backend
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- bcrypt (password hashing)

---

## 🏗 Architecture

```

task-manager/
├── frontend/   (React application)
└── backend/    (Express API + Prisma + PostgreSQL)

```

---

## 🔐 Features

- User registration
- User login (JWT authentication)
- Password hashing with bcrypt
- Protected API routes
- Multi-user task ownership
- Full CRUD (Create, Read, Update, Delete)
- Persistent PostgreSQL database
- Prisma relational data modeling

---

## ⚙️ Local Development Setup

### Backend

```

cd backend
npm install
npx prisma migrate dev
node src/server.js

```

Server runs at:
```

[http://localhost:5000](http://localhost:5000)

```

---

### Frontend

```

cd frontend
npm install
npm run dev

```

Frontend runs at:
```

[http://localhost:5173](http://localhost:5173)

```

---

## 🧠 Current Status

Checkpoint: `v1-auth-working`

- PostgreSQL connected ✅
- Prisma migrations working ✅
- JWT authentication working ✅
- Multi-user architecture implemented ✅
- Backend protected routes working ✅

---

## 📌 Planned Improvements

- Backend architecture refactor
- Input validation (Zod)
- Centralized error handling
- Frontend auth flow integration
- Production deployment

---

## 👤 Author

Binh Vo  
Fullstack Developer
```
