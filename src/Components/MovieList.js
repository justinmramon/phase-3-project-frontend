import React from "react";
import {useEffect, useState } from "react";

function MovieList(){

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/movies")
        .then((r) => r.json())
        .then((data) => setMovies(data));
      }, [])

      function handleDelete(id){
        fetch(`http://localhost:9292/movies/${id}`,{
            method: "DELETE",
        })
        const moviesToDisplay = movies.filter(movie => movie.id !== id)
        setMovies(moviesToDisplay)
      }

    return(
        <div>
        <ul>
            {movies.map((movie) => 
                <li key={movie.id}>{movie.name}
                <button onClick={() => handleDelete(movie.id)}>x</button>
                </li>
            )}
        </ul>
        </div>
    )
}

export default MovieList;