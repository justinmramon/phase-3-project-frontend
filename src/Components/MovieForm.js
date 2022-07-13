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
        <div>
            <h3>Movie Form</h3>
            <form onSubmit={handleSubmit} to="/movielist">
                <input onChange={(e) => setName(e.target.value)} placeholder="Title"></input>
                <input onChange={(e) => setDescription(e.target.value)} placeholder="Synopsis"></input>
                <input onChange={(e) => setPosterUrl(e.target.value)} placeholder="Image"></input>
                <button>Submit</button>
            </form>
        </div>
        
    )
}

export default MovieForm