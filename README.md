# Week 2 Internship Tasks — Full Stack (MERN)

This repo contains the completed Week 2 tasks from both slide decks:

- **`frontend/`** — React Fundamentals: components, props/state, To-Do app
  (add/delete), React Router multi-page navigation, CSS modules.
- **`backend/`** — Backend Development: Node.js/Express/MongoDB, a To-Do
  List REST API, a User Authentication API (bcrypt + JWT), and the Notes App
  Backend mini project (JWT-secured CRUD).

## Quick start

```bash
# Backend
cd backend
npm install
cp .env.example .env   # then edit MONGO_URI / JWT_SECRET
npm run dev

# Frontend (in a new terminal)
cd frontend
npm install
npm run dev
```

See `backend/README.md` and `frontend/README.md` for details on each part.

## Pushing this to GitHub

1. Create a new empty repository on GitHub (don't add a README/gitignore
   there — this project already has them).
2. From inside this folder, run:

```bash
git init
git add .
git commit -m "Week 2: React fundamentals + Node/Express/MongoDB backend"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

Replace `<your-username>` and `<your-repo-name>` with your actual GitHub
username and the repository name you created.

> Note: `.env` and `node_modules/` are already excluded via `.gitignore` in
> both `backend/` and `frontend/`, so you won't accidentally commit secrets
> or dependencies.
