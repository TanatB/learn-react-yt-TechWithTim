import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber = 1;

  return (
    // Fragment <>
    <>
      Conditional Rendering
      {movieNumber === 2 ? (
        <MovieCard movie={{ title: "first Film", release_date: "2025" }} />
      ) : (
        <MovieCard movie={{ title: "Second Film", release_date: "2020" }} />
      )}


      <MovieCard movie={{ title: "Tim's Film", release_date: "2025" }} />
      <MovieCard movie={{ title: "Third Film", release_date: "2020" }} />
    </>
  )
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


export default App
