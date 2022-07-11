import logo from './logo.svg';
import './App.css';
import MovieList from './Components/MovieList.js'
import MovieForm from './Components/MovieForm';
import { useState, useEffect } from "react";
import Navbar from './Components/Navbar';


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
    <div className="App">
      <Navbar allUsers={allUsers} setCurrentUser={setCurrentUser}/>
      <MovieList movies={movies} setMovies={setMovies} currentUser={currentUser}/>
      <MovieForm movies={movies} setMovies={setMovies} currentUser={currentUser}/>
    </div>
  );
}

export default App;
