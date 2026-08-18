# Week 2 Backend — Node.js, Express.js, MongoDB

Covers: Node.js/NPM setup, Express routing, MongoDB + Mongoose, REST API design,
and JWT/bcrypt authentication.

## Setup

```bash
cd backend
npm install
cp .env.example .env
# edit .env and set MONGO_URI (local MongoDB or MongoDB Atlas) and JWT_SECRET
npm run dev
```

Server runs at `http://localhost:5000`.

## Assignment 1 — To-Do List REST API

| Method | Endpoint          | Description        |
|--------|--------------------|---------------------|
| GET    | /api/todos         | Get all tasks       |
| POST   | /api/todos         | Add a task `{ title }` |
| PUT    | /api/todos/:id     | Update a task        |
| DELETE | /api/todos/:id     | Delete a task        |

Test these with Postman by sending JSON bodies, e.g.:
```json
{ "title": "Buy groceries" }
```

## Assignment 2 — User Authentication API

| Method | Endpoint             | Description                     |
|--------|------------------------|----------------------------------|
| POST   | /api/auth/register    | Register `{ name, email, password }` |
| POST   | /api/auth/login       | Login `{ email, password }`, returns a JWT |

Passwords are hashed with **bcrypt** before saving. Successful login/register
returns a **JWT** you can use in the `Authorization: Bearer <token>` header.

## Mini Project — Notes App Backend

All `/api/notes` routes require a valid JWT (register/login first, then pass
the token).

| Method | Endpoint         | Description                  |
|--------|-------------------|-------------------------------|
| GET    | /api/notes        | Get the logged-in user's notes |
| POST   | /api/notes        | Create a note `{ title, content }` |
| PUT    | /api/notes/:id    | Update a note                  |
| DELETE | /api/notes/:id    | Delete a note                  |

Example header for protected routes:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
