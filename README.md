# Week 2 Frontend — React Fundamentals

Covers: components, props/state, a To-Do app with add/delete, multi-page
navigation with React Router, and CSS modules for styling.

## Setup

```bash
cd frontend
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Pages

- **Home** (`/`) — overview
- **Product** (`/product`) — `ProductInfo` component: receives `name`,
  `price`, `description` as **props**, and manages a `quantity` counter as
  local **state**.
- **To-Do** (`/todo`) — `TodoApp` component: add and delete tasks (local
  state array).
- **About** (`/about`) — demonstrates React Router navigation.

## Structure

```
src/
  components/
    Navbar.jsx / Navbar.module.css
    ProductInfo.jsx / ProductInfo.module.css
    TodoApp.jsx / TodoApp.module.css
  pages/
    Home.jsx
    ProductPage.jsx
    TodoPage.jsx
    About.jsx
  App.jsx
  main.jsx
```
