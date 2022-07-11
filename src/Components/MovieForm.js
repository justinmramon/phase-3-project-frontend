import React, { useState } from "react";

function MovieForm({movies:{name, description, user_id}}) {

    const [newName, setNewName] = useState("")
    const [newDescription, setNewDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        description: newDescription,
        user_id: user_id
      }),
    })
    }

    return (
        <div>
            <h3>Movie Form</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setNewName(e.target.value)}></input>
                <input onChange={(e) => setNewDescription(e.target.value)}></input>
                <button>Submit</button>
            </form>
        </div>
        
    )
}

export default MovieForm