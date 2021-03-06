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

      <div className=' text-white h-20 '>
            <div className='flex mb-8 justify-center text-2xl'>
            <NavLink exact to="/">
              <div className='ml-10' onClick={() => {
                setCurrentUser([])
                setShowUsers(false)}}><div className='mt-3 hover:text-black'>Home</div></div>
            </NavLink>
            <div className='ml-10' onClick={() => setShowUsers(!showUsers)}><div className='mt-3 hover:text-black hover:cursor-pointer'>Users</div></div>
            </div>
            <div className='flex justify-evenly'>
              {showUsers === false ? <></> : allUsers.map(user => (
                <NavLink to="/movielist" key={user.id}><div className='hover:text-black' onClick={() => setCurrentUser(user)}>{user.name}</div></NavLink>
              ))}
              {showUsers === false ? <></> : <NavLink to="/userform"><span className='hover:text-black' onClick={() => setCurrentUser([])}>New User</span></NavLink>}
            </div>
          </div>

      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 text-center">
        
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