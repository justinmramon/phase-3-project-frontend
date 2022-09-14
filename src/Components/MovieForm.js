import React, { useState } from "react";

function MovieForm({currentUser, setMovies, movies}) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [posterUrl, setPosterUrl] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                description: description,
                user_id: currentUser.id,
                poster_url: posterUrl
            }),
        })
        .then(r => r.json())
        .then(newMovie => setMovies([newMovie, ...movies]))
        e.target.reset()
    }

    return (
    <div>
        <div id="container" class="max-w-xs rounded overflow-hidden border-white border-1 mt-48 mx-auto bg-[#14181c]">
            <h3 class=" text-white text-2xl mx-14 mt-8 ">Add A Movie</h3>
            <form onSubmit={handleSubmit} to="/movielist">
            <br></br>
                <div class="flex"> 
                <input onChange={(e) => setName(e.target.value)} placeholder="Title" class="mx-14 block px-1 py-2 border-0 border-b-2 focus:ring-0 focus:border-blue text-slate-400 placeholder-slate-400 placeholder-opacity-50 " type="text"></input>
                </div>
                <br></br>
                <div class="flex">
                <input onChange={(e) => setDescription(e.target.value)} placeholder="Synopsis" class="mx-14 block px-1 py-2 border-0 border-b-2 focus:ring-0 focus:border-blue text-slate-400 placeholder-slate-400 placeholder-opacity-50 " type="text"></input>
                </div>
                <br></br>
                <div class="flex">
                <input onChange={(e) => setPosterUrl(e.target.value)} placeholder="Image" class=" mx-14 block px-1 py-2 border-0 border-b-2  focus:ring-0 focus:border-blue  text-slate-400 placeholder-slate-400 placeholder-opacity-50 " type="text"></input>
                </div>
                <br></br>
                <button data-bs-toggle="modal" data-bs-target="#moviecreatedpopup" class="mb-10 inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                </form>
       
        </div>
        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none" id="moviecreatedpopup" tabindex="-1" aria-labelledby="moviecreatedpopup" aria-modal="true" role="dialog">
          <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="modal-header flex flex-shrink-0 items-center justify-between p-3 rounded-t-md">
                <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                        <p>Movie has been added!</p>
                          <div
                          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-3 rounded-b-md">
                        <button type="button"
                      class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#14181c] hover:shadow-lg focus:bg-[#14181c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#14181c] active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>    
    )
}

export default MovieForm