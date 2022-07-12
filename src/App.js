import './App.css';
import MovieList from './Components/MovieList.js'
import MovieForm from './Components/MovieForm.js';
import UserForm from './Components/UserForm.js';
import { useState, useEffect } from "react";
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
      fetch("http://localhost:9292/movies")
      .then((r) => r.json())
      .then((data) => setMovies(data));
    }, [])

    useEffect(() => {
      fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setAllUsers(data));
    },[])

  return (
    <Router>
      <div className="App">
        <nav>
            {allUsers.map(user => {
                return <NavLink to="/movielist"><span onClick={() => setCurrentUser(user)} key={user.id}>{user.name}</span></NavLink>
            })}
            <NavLink to="/movieform"><span>New Movie</span></NavLink>
            <NavLink to="/userform"><span>New User</span></NavLink>
        </nav>

        <Switch>
          <Route>
            <MovieList path="/movielist" movies={movies} setMovies={setMovies} currentUser={currentUser}/>
          </Route>
          <Route path="/movieform">
            <MovieForm movies={movies} setMovies={setMovies} currentUser={currentUser}/>
          </Route>
          <Route path="/userform">
            <UserForm allUsers={allUsers} setAllUsers={setAllUsers}/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
