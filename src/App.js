import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import MovieList from './Components/MovieList.js';
import MovieForm from './Components/MovieForm.js';
import UserForm from './Components/UserForm.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {

  const [movies, setMovies] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then((r) => r.json())
    .then((data) => setAllUsers(data));
  },[])


  useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then((r) => r.json())
    .then((data) => setMovies(data));
  }, [])

  return (
    <Router>
      <Navbar setMovies={ setMovies } setAllUsers={ setAllUsers } setCurrentUser={ setCurrentUser } allUsers={ allUsers } />
        <Switch>
          <Route path="/movielist" render={() => (<MovieList movies={movies} setMovies={setMovies} currentUser={currentUser} />)} />
          <Route path="/movieform">
            <MovieForm movies={movies} setMovies={setMovies} currentUser={currentUser} />
          </Route>
          <Route path="/userform">
            <UserForm allUsers={allUsers} setAllUsers={setAllUsers}/>
          </Route>
        </Switch> 
    </Router>
  );
}

export default App;
