import React, { useState, useEffect } from 'react';
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import UserForm from "./UserForm";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

function Navbar({ setAllUsers, setCurrentUser, allUsers }) {

    const [showUsers, setShowUsers] = useState(false)
    const [nav, setNav] = useState(true)
  
    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <Router>
            <div className="flex justify-between items-center h-24 mx-auto px-4 text-white">
                <h1 className="w-full text-3xl font-bold text-green-400">BETTERLOXD.</h1>
                <div onClick={ handleNav } className="flex right-10">
                    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
                </div>
                <div className={!nav ? "fixed left-0 top-0 w-[25%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000" : 'fixed left-[-100%]'} >
                    <h1 className="w-full text-3xl font-bold text-green-400 m-4">BETTERLOXD.</h1>
                    <ul className="uppercase p-4">
                        <NavLink exact to="/">
                            <li onClick={() => {
                            setCurrentUser([])
                            setShowUsers(false)}} 
                            className="p-4 border-b border-gray-600">Home</li>
                        </NavLink>
                            <li onClick={() => setShowUsers(!showUsers)} 
                            className="p-4 border-b border-gray-600">Members</li>
                                
                                    {showUsers === false ? <></> : allUsers.map(user => (
                                    <NavLink className="flex flex-col pl-4 pb-1 text-sm" onClick={() => setCurrentUser(user)} to="/movielist" key={user.id}>
                                       {user.name}
                                    </NavLink>
                                    ))}
                        
                        <li className="p-4 border-b border-gray-600">Films</li>
                        <li className="p-4 border-b border-gray-600">Create Account</li>
                        {showUsers === false ? <></> : <NavLink to="/userform" style={{textDecoration: 'none'}}><span onClick={() => setCurrentUser([])}>New User</span>
                        </NavLink>}
                    </ul>
                </div>
            </div>
        </Router>
    )
}

export default Navbar;