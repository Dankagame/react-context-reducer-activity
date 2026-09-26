# React Guided Learning Activity: Theme Switcher & useReducer

**Title:** Implementing a Theme Switcher with useContext & State Management with useReducer

**Objective:** Learn how to use the React Context API (`useContext`) for **global state management** (theme switching) and `useReducer` for **managing complex state** (task manager).

## Tools

- GitHub Classroom
- GitHub Codespaces (or a local development environment with Node.js and VS Code)
- Vite
- React
- TypeScript

## Color Palette

| Theme | Background | Text | Button |
| ----- | ---------- | ---- | ------ |
| Light | `#FFFFFF` | `#000000` | `#1E90FF` |
| Dark | `#242629` | `#FFFFFF` | `#85D1B0` |

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173/`.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Navbar.module.css
│   ├── TaskManager.tsx
│   └── TaskManager.module.css
├── constants/
│   └── theme.ts
├── context/
│   └── ThemeContext.tsx
├── reducers/
│   └── taskReducer.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Section 1: Theme Switcher with useContext

1. **Theme constants** – `src/constants/theme.ts` exports `LIGHT_THEME` and `DARK_THEME`.
2. **Theme context** – `src/context/ThemeContext.tsx` creates a typed context, a `ThemeProvider` that holds the theme in state, and a `useTheme` custom hook that throws if used outside the provider.
3. **Navbar** – `src/components/Navbar.tsx` reads the theme with `useTheme` and has a button that toggles between light and dark mode.

## Section 2: State Management with useReducer

1. **Task reducer** – `src/reducers/taskReducer.ts` defines typed `Task`, `State` and `Action` types and handles `add` and `remove` actions.
2. **Task Manager** – `src/components/TaskManager.tsx` uses `useReducer` to add and remove tasks, and `useTheme` to style itself for the current theme.
3. **App** – `src/App.tsx` is wrapped in `ThemeProvider` and renders the `Navbar` and `TaskManager`.
