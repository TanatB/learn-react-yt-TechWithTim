# Frontend Movie App

A React app for browsing, searching, and favoriting movies using the TMDB API. Built following the [Tech With Tim](https://www.youtube.com/@TechWithTim) YouTube tutorial.

## Features

- Browse popular movies from TMDB
- Search for movies by title
- Add/remove favorites with localStorage persistence
- Responsive navigation between Home and Favorites pages

## Tech Stack

- React 19
- React Router v7
- Vite 8
- [TMDB API](https://www.themoviedb.org)

## Project Structure

```
frontend-movie-app/src/
├── components/
│   ├── MovieCard.jsx      # Individual movie card display
│   └── NavBar.jsx         # Navigation bar
├── context/
│   └── MovieContext.jsx    # Global state for favorites
├── css/                   # Component and page styles
├── pages/
│   ├── Home.jsx           # Main page with search and popular movies
│   └── Favorites.jsx      # Saved favorites page
├── services/
│   └── api.js             # TMDB API calls
├── App.jsx                # Root component with routing
└── main.jsx               # Entry point
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   cd frontend-movie-app
   npm install
   ```
3. Add your TMDB API key in `src/services/api.js`
4. Start the dev server:
   ```bash
   npm run dev
   ```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run lint`    | Run ESLint               |
| `npm run preview` | Preview production build |

## Credit

Built following the [Tech With Tim](https://www.youtube.com/watch?v=G6D9cBaLViA) React tutorial on YouTube.
