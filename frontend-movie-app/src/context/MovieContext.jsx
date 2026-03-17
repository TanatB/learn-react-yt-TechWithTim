import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    // Use Local Storage (store values directly within our browser)
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        // If there's anything inside favs, store information in a 
        // list -> JSON string  
        if (storedFavs) setFavorites(JSON.parse(storedFavs));
    }, [])

    // Anytime favs stage above changes we wanna update what we're storing
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    // Add favorites
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]);
    }

    // Remove
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    // provide values to the children
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    // Render the children inside
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
};