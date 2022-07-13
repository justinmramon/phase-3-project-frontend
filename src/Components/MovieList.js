import React from "react";
import MovieCard from "./MovieCard";
import {useEffect, useState } from "react";

function MovieList({movies, setMovies, currentUser}){


    const moviesToDisplay = movies.filter(movie => movie.user_id === currentUser.id)

    return(
        <div>
            <h2>{currentUser.name}'s Watchlist</h2>
            <ul>
                {moviesToDisplay.map((movie) => 
                    <MovieCard movie={movie} key={movie.id} setMovies={setMovies} movies={movies} />    
                )}
            </ul>
            
        </div>
    )
}

export default MovieList;