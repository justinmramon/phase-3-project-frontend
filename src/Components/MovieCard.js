import React, { useState } from "react";

function MovieCard({movie, setMovies, movies}) {

    const [currentMovie, setCurrentMovie] = useState(movie) 
    const [editName, setEditName] = useState('')
    const [editDescription, setEditDescription] = useState('')
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
              name: editName,
              description: editDescription,
            }),
          })
          .then((r) => r.json())
          .then((updatedMovie) => setCurrentMovie(updatedMovie));
        }

    return (
        <li>
        <span>{currentMovie.name}</span>
        <button onClick={() => handleDelete(currentMovie.id)}>Delete</button>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        <div style={isEditing === false ? {display: "none"} : {display: ""}}>
            <h3>Edit Movie</h3>
            <form onSubmit={handleSubmit} >
                <input placeholder="Title" onChange={(e) => setEditName(e.target.value)}></input>
                <input placeholder="Synopsis" onChange={(e) => setEditDescription(e.target.value)}></input>
                <button>Submit</button>
            </form>
        </div>
        
    </li>
    )
}

export default MovieCard