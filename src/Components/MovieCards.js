import React, { useState } from 'react'


const MovieCards = ( { movie, movies, setMovies } ) => {

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
          <div className="w-68 h-100">
            <div>
                <span className="text-white">{movie.name}</span>
                <img onClick={(e) => setDetails(true)} id={movie.id} title={movie.description} alt={movie.description} src={movie.poster_url} class="bg-gradient-to-r from-[#14181c] to-[#1f262d] inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" />
                <div class="mx-0" style={details === false ? {display: "none"} : {display: ""}}>
                <button class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" onClick={(e) => setDetails(false)}>X</button>
                <button class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handleDelete(currentMovie.id)}>Delete</button>
                <button class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" onClick={() => setIsEditing(true)}>Edit</button>
                </div>
                <div class="bg-gradient-to-r from-[#14181c] to-[#1f262d] opacity-0 hover:opacity-100 duration-300 bottom-60 justify-center translate-y-1/5 translate-x-1/5 relative text-lg text-white font-semibold">
                  {movie.description}
                </div>
                <div class="mt-0 translate-y-1/5 border-1 max-w-xs rounded overflow-hidden shadow-lg"  style={isEditing === false ? {display: "none"} : {display: ""}}>
                <h3 class=" text-white text-2xl">Edit Movie</h3>
                <form onSubmit={handleSubmit} >
                    <input class="mb-3 mt-3 mx-auto block px-1 py-2 border-0 border-b-2 focus:ring-0 focus:border-blue text-slate-400 placeholder-slate-400 placeholder-opacity-50 " type="text" placeholder="Synopsis" onChange={(e) => setEditDescription(e.target.value)}></input>
                    <input class="mb-3 mt-3 mx-auto block px-1 py-2 border-0 border-b-2 focus:ring-0 focus:border-blue text-slate-400 placeholder-slate-400 placeholder-opacity-50 " type="text" placeholder="Poster URL" onChange={(e) => setPosterUrl(e.target.value)}></input>
                    <button class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                    <button class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" onClick={(e) => {
                      e.stopPropagation()
                      setIsEditing(false)}}>Cancel</button>
                </form>      
                </div>   
            </div>
          </div>
      </div>
  )
}

export default MovieCards