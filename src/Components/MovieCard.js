import React, { useRef, useState } from "react";

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
      <li >
        <div className="text-center relative w-64 h-100 snap-start">
            <div>
                <span className="text-slate-700 py-6 px-3 mx-auto text-xl">{currentMovie.name}</span>   
                <img alt="" src={currentMovie.poster_url}></img>
                <p>{currentMovie.description}</p>
                <button className="border-2 border-slate rounded hover:bg-slate-400 hover:border-slate-100" onClick={() => handleDelete(currentMovie.id)}>Delete</button>
                <button className="border-2 border-slate rounded hover:bg-slate-400 hover:border-slate-100" onClick={() => setIsEditing(true)}>Edit</button>
            </div>
                    
            <div className="edit-form" style={isEditing === false ? {display: "none"} : {display: ""}}>
                <button className="x-button" onClick={() => setIsEditing(false)}>X</button>
                <h3>Edit Movie</h3>
                <form onSubmit={handleSubmit} >
                    <input placeholder="Synopsis" onChange={(e) => setEditDescription(e.target.value)}></input>
                    <button>Submit</button>
                </form>      
            </div>   
        </div>
      </li>
    )
}

export default MovieCard