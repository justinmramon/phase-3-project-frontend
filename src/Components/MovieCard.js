import React, { useState } from "react";

function MovieCard({movie, setMovies, movies}) {

    const [currentMovie, setCurrentMovie] = useState(movie) 
    const [editDescription, setEditDescription] = useState(currentMovie.description)
    const [isEditing, setIsEditing] = useState(false)



    function handleDelete(id){
        fetch(`http://localhost:9292/movies/${id}`,{
            method: "DELETE",
        })
        const moviesToDisplay = movies.filter(movie => movie.id !== id)
        setMovies(moviesToDisplay)
      }

      function handleSubmit(e) {
        
        e.preventDefault()

        
        fetch(`http://localhost:9292/movies/${currentMovie.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              description: editDescription,
            }),
          })
          .then((r) => r.json())
          .then((updatedMovie) => setCurrentMovie(updatedMovie));
        }

    return (
      <li>
        <div className="movie-card">
            <span>{currentMovie.name}</span>
            
            <img alt="" src={currentMovie.poster_url}></img>
            <p>{currentMovie.description}</p>
            <button onClick={() => handleDelete(currentMovie.id)}>Delete</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
        
        <div className="edit-form" style={isEditing === false ? {display: "none"} : {display: ""}}>
            <button className="x-button" onClick={() => setIsEditing(false)}>X</button>
            <h3>Edit Movie</h3>
            <form onSubmit={handleSubmit} >
                <input placeholder="Synopsis" onChange={(e) => setEditDescription(e.target.value)}></input>
                <button>Submit</button>
            </form>
            
        </div>
        
      </li>
    )
}

export default MovieCard