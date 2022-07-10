import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import MovieList from './Components/MovieList.js'
import { useState, useEffect } from "react";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <MovieList />
    </div>
  );
}

export default App;
