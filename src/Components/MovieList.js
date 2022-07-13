import React from "react";
import MovieCard from "./MovieCard";
import {NavLink} from "react-router-dom";

function MovieList({movies, setMovies, currentUser}){


    const moviesToDisplay = movies.filter(movie => movie.user_id === currentUser.id)

    return(
        <div>
            {currentUser.length === 0 ? <></> : <h2>{currentUser.name}'s Watchlist</h2>}
            {currentUser.length === 0 ? <></> : <NavLink to="/movieform"><span>Add Movie for {currentUser.name}</span></NavLink>}
            <ul>
                {moviesToDisplay.map((movie) => 
                    <MovieCard movie={movie} key={movie.id} setMovies={setMovies} movies={movies} />    
                )}
            </ul>
            
        </div>
    )
}

export default MovieList;