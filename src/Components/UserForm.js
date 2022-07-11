import React, { useState } from "react";

function UserForm({allUsers, setAllUsers}) {

    const [newUser, setNewUser] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUser,
      }),
    })
      .then((r) => r.json())
      .then((newUser) => setAllUsers([...allUsers, newUser]));
    }

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" onChange={(e) => setNewUser(e.target.value)}></input>
                <button>Create</button>
            </form>
            
        </div>
        
    )
}

export default UserForm