import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import MovieList from './Components/MovieList.js'
import MovieForm from './Components/MovieForm';
import { useState, useEffect } from "react";


function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/movies")
      .then((r) => r.json())
      .then((data) => setMovies(data));
    }, [])

  return (
    <div className="App">
      <MovieForm movies={movies}/>
      <header className="App-header">
        <Header />
      </header>
        
        <MovieList movies={movies} setMovies={setMovies}/>
        
    </div>
  );
}

export default App;
