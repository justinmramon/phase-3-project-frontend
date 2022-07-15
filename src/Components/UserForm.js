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
      e.target.reset()
    }

    return (
        <div class="bg-slate-400 max-w-xs rounded overflow-hidden border-white border-2 mx-auto mt-20">
            <h3 class=" text-white text-2xl mt-6 mx-14">Create New User</h3>
            <br></br>
            <form onSubmit={handleSubmit}>
                <input class="mx-14 block px-3 py-2 border-0 border-b-2 focus:ring-0 focus:border-blue text-slate-700 placeholder-slate-400 placeholder-opacity-50 " type="text" placeholder="Name" onChange={(e) => setNewUser(e.target.value)}></input>
                <br></br>
                <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-slate-400 py-2 px-4 border border-white rounded mx-16 mb-8">Create</button>
            </form>
        </div>
        
    )
}

export default UserForm