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
        <div class="max-w-xs rounded overflow-hidden shadow-lg mt-8">
            <h3 class=" text-blue-500 text-2xl mt-6 mx-14">Create New User</h3>
            <br></br>
            <form onSubmit={handleSubmit}>
                <input class="mx-14 block px-3 py-2 border-0 border-b-2 border-blue-300 focus:ring-0 focus:border-blue text-blue-500 placeholder-blue-500 placeholder-opacity-50 " type="text" placeholder="Name" onChange={(e) => setNewUser(e.target.value)}></input>
                <br></br>
                <button class="bg-transparent hover:bg-blue-400 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-16 mb-8">Create</button>
            </form>
        </div>
        
    )
}

export default UserForm