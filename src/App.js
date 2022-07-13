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
  const [showUsers, setShowUsers] = useState(false)

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
      <div>
            <NavLink exact to="/" style={{textDecoration: 'none'}}>
              <span onClick={() => {
                setCurrentUser([])
                setShowUsers(false)}}>Home</span>
            </NavLink>
            <span className='users-btn' onClick={() => setShowUsers(!showUsers)} >Users</span>
            
            <nav>
              {showUsers === false ? <></> : allUsers.map(user => (
                <NavLink to="/movielist" key={user.id}><span onClick={() => setCurrentUser(user)}>{user.name}</span></NavLink>
              ))}
              {showUsers === false ? <></> : <NavLink to="/userform" style={{textDecoration: 'none'}}><span onClick={() => setCurrentUser([])}>New User</span></NavLink>}
            </nav>
            
        <Switch>
          <Route path="/movielist">
            <MovieList movies={movies} setMovies={setMovies} currentUser={currentUser}/>
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
