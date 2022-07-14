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
    }

    return (
        <div id="container" class="max-w-xs rounded overflow-hidden shadow-lg ">
            <h3 class=" text-blue-500 text-2xl mx-14 mt-8 ">Movie Form</h3>
            <form onSubmit={handleSubmit} to="/movielist">
            <br></br>
                <div class="flex"> 
                <input onChange={(e) => setName(e.target.value)} placeholder="Title" class="mx-14 block px-1 py-2 border-0 border-b-2 border-blue-300 focus:ring-0 focus:border-blue text-blue-500 placeholder-blue-500 placeholder-opacity-50 " type="text"></input>
                </div>
                <br></br>
                <div class="flex">
                <input onChange={(e) => setDescription(e.target.value)} placeholder="Synopsis" class="mx-14 block px-1 py-2 border-0 border-b-2 border-blue-300 focus:ring-0 focus:border-blue text-blue-500 placeholder-blue-500 placeholder-opacity-50 " type="text"></input>
                </div>
                <br></br>
                <div class="flex">
                <input onChange={(e) => setPosterUrl(e.target.value)} placeholder="Image" class=" mx-14 block px-1 py-2 border-0 border-b-2  border-blue-300 focus:ring-0 focus:border-blue  text-blue-500 placeholder-blue-500 placeholder-opacity-50 " type="text"></input>
                
                
                </div>
                <br></br>
                <button class="bg-transparent hover:bg-blue-400 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-14 mb-8">Submit</button>
               
                </form>
       
        </div>
        
    )
}

export default MovieForm