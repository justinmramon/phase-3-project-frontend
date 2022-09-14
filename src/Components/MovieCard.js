import React, { useState } from "react";

function MovieCard({movie, setMovies, movies}) {

    const [currentMovie, setCurrentMovie] = useState(movie) 
    const [editDescription, setEditDescription] = useState(currentMovie.description)
    const [isEditing, setIsEditing] = useState(false)
    const [details, setDetails] = useState(false)
    const [posterUrl, setPosterUrl] = useState(currentMovie.poster_url)

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
              poster_url: posterUrl,
            }),
          })
          .then((r) => r.json())
          .then((updatedMovie) => setCurrentMovie(updatedMovie));
          setIsEditing(false)
          e.target.reset()
        }

    return (
      <div>
        <div className="text-center relative w-64 h-100 snap-start mb-2">
            <div>  
                <img alt="" src={currentMovie.poster_url}  onClick={(e) => setDetails(true)} />
                <div style={details === false ? {display: "none"} : {display: ""}}>
                <button class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" onClick={(e) => setDetails(false)}>X</button>
                <button class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handleDelete(currentMovie.id)}>Delete</button>
                <button class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            </div>
                    
            <div class=" border-white border-1 mt-5 max-w-xs rounded overflow-hidden shadow-lg"  style={isEditing === false ? {display: "none"} : {display: ""}}>
                <h3 class=" text-white text-2xl ">Edit Movie</h3>
                <form onSubmit={handleSubmit} >
                    <input class="mb-3 mt-3 mx-auto block px-1 py-2 border-0 border-b-2 focus:ring-0 focus:border-blue text-slate-400 placeholder-slate-400 placeholder-opacity-50 " type="text" placeholder="Synopsis" onChange={(e) => setEditDescription(e.target.value)}></input>
                    <input class="mb-3 mt-3 mx-auto block px-1 py-2 border-0 border-b-2 focus:ring-0 focus:border-blue text-slate-400 placeholder-slate-400 placeholder-opacity-50 " type="text" placeholder="Poster URL" onChange={(e) => setPosterUrl(e.target.value)}></input>
                    <button class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out mb-8">Submit</button>
                    <button class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out mb-8" onClick={(e) => {
                      e.stopPropagation()
                      setIsEditing(false)}}>Cancel</button>
                </form>      
            </div>   
        </div>
      </div>
    )
}

export default MovieCard