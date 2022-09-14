import './App.css';
import MovieList from './Components/MovieList.js'
import MovieForm from './Components/MovieForm.js';
import UserForm from './Components/UserForm.js';
import Movies from './Components/Movies.js';
import HomePage from './Components/HomePage.js';
import MovieCards from './Components/MovieCards.js';
import Logo from './styles/letterboxd.jpg';

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

      <div className=' text-white h-28 bg-[#14181c] position:absolute'>
            <div className='flex mb-3 justify-center text-2xl'>
            <img src={Logo} alt='logo' className='flex mt-2'/>
                <NavLink exact to="/">
                    <div className='ml-10' onClick={() => {
                                          setCurrentUser([])
                                          setShowUsers(false)}}>
                    <div className='mt-3 mr-40'> <span>Betterloxd</span></div>
                    </div>
                </NavLink>
            <div>
              <div>
                <NavLink exact to="/movies">
                      <div className='mt-3 text-base'>Movies</div>
                </NavLink>
              </div>
            </div>
            <div className='ml-10' onClick={() => setShowUsers(!showUsers)}>
              <div className='mt-3 text-base hover:cursor-pointer'>Members</div>
            </div>
            <div className='ml-10'>
              <NavLink to="/userform">
                <div className='mt-3 text-base'>Create User</div>
              </NavLink>
            </div>
            <div className='ml-10'>
              <NavLink to="/movieform">
                <div className='mt-3 text-base'>Add New Movie</div>
              </NavLink>
            </div>
            </div>
            <div className='flex justify-evenly'>
              {showUsers === false ? <></> : allUsers.map(user => (
                <NavLink to="/movielist" key={user.id}><div className='hover:text-black' onClick={() => setCurrentUser(user)}>{user.name}</div></NavLink>
              ))}
              {/* {showUsers === false ? <></> : <NavLink to="/userform"><span className='hover:text-black' onClick={() => setCurrentUser([])}>New User</span></NavLink>} */}
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
          <Route path="/movies">
            <Movies movies={movies} setMovies={setMovies} />
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
          <Route path="/moviecards">
            <MovieCards movies={movies} setMovies={setMovies} />
          </Route>
        </Switch> 

      </div>
    </Router>
    
  );
}

export default App;
