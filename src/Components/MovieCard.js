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
          setIsEditing(false)
          e.target.reset()
        }

    return (
      <li >
        <div className="text-center relative w-64 h-100 snap-start">
            <div>
                  
                <img alt="" src={currentMovie.poster_url} className="hover:popover-body"></img>
                <p className="mt-3">{currentMovie.description}</p>
                <button className="border-2 mr-2 px-1 py-1 border-slate mt-2 rounded hover:bg-slate-400 hover:border-slate-100" onClick={() => handleDelete(currentMovie.id)}>Delete</button>
                <button className="border-2 border-slate px-1 py-1 mt-2 rounded hover:bg-slate-400 hover:border-slate-100" onClick={() => setIsEditing(true)}>Edit</button>
            </div>
                    
            <div class=" border-white border-2 mt-5 max-w-xs rounded overflow-hidden shadow-lg"  style={isEditing === false ? {display: "none"} : {display: ""}}>
                
                <h3 class=" text-white text-2xl mx-14 mt-8 ">Edit Movie</h3>
                <form onSubmit={handleSubmit} >
                    <input class="mb-3 mt-3 mx-auto block px-1 py-2 border-0 border-b-2 focus:ring-0 focus:border-blue text-slate-400 placeholder-slate-400 placeholder-opacity-50 " type="text" placeholder="Synopsis" onChange={(e) => setEditDescription(e.target.value)}></input>
                    <button class=" bg-transparent  hover:bg-slate-400 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mr-2 mb-8">Submit</button>
                    <button class="bg-transparent  hover:bg-slate-400 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded  mb-8" onClick={(e) => {
                      e.stopPropagation()
                      setIsEditing(false)}}>Cancel</button>
                </form>      
            </div>   
        </div>
      </li>
    )
}

export default MovieCard