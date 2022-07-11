import React from "react";

function Navbar({allUsers, setCurrentUser}) {
    return (
        <nav>
            {allUsers.map(user => {
                return <span onClick={() => setCurrentUser(user)} key={user.id}>{user.name}</span>
            })}
            <span>New Movie</span>
            <span>New User</span>
        </nav>
    )
}

export default Navbar