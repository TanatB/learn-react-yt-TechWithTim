import './css/App.css';
import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { MovieProvider } from './context/MovieContext';
import { Routes, Route } from "react-router-dom";

function App() {
  const movieNumber = 1;
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

// 1. Make a basic dummy component
function Text({ display }) {
  return (
    <div>
      test: {display}
      <p>Hello World</p>
    </div>
  );
}


export default App;
