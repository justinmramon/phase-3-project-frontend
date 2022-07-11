import React from "react";
import {useEffect, useState } from "react";

function MovieList({movies, setMovies, currentUser}){



      function handleDelete(id){
        fetch(`http://localhost:9292/movies/${id}`,{
            method: "DELETE",
        })
        const moviesToDisplay = movies.filter(movie => movie.id !== id)
        setMovies(moviesToDisplay)
      }

    const moviesToDisplay = movies.filter(movie => movie.user_id === currentUser.id)

    return(
        <div>
            <h2>Movies</h2>
            <ul>
                {moviesToDisplay.map((movie) => 
                    <li key={movie.id}>
                        {movie.name}
                        <button onClick={() => handleDelete(movie.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default MovieList;