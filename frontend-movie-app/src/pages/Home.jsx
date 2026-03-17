import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";
// Hooks
import { useState, useEffect } from "react";

// Display lists of movies
function Home() {
    // Have all the forms connected to the piece of state
    const [searchQuery, setSearchQuery] = useState("");

    // Manually add movies details
    const manualMovies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "The matrix", release_date: "1998" },
        { id: 4, title: "John Wick 2", release_date: "2023" },
    ];


    // Use API to fetch the movies data (useEffect)
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies()
    }, [])

    // Anonymous Function
    const handleSearch = async (e) => {
        // Prevent the default behavior
        e.preventDefault();

        // Make sure users can't search with empty string
        if (!searchQuery.trim()) return
        // Not allow the search while the website is already searching
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }

        setSearchQuery("")
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    // Define a function to edit the search query
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? <div className="loading">Loading...</div> :
                (
                    <div className="movies-grid">
                        {movies.map((movie) => (
                            // render if the title starts with search query
                            // (movie.title.toLowerCase().startsWith(searchQuery)) &&
                            // shows movie
                            (<MovieCard movie={movie} key={movie.id} />)
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default Home