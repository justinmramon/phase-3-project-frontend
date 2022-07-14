import React from "react";
import MovieCard from "./MovieCard";
import {NavLink} from "react-router-dom";

function MovieList({movies, setMovies, currentUser}){

    const [slideLeft, setSlideLeft] = React.useState(0);
    const moveRight = () => {
        const el = document.getElementById(`hscroll`);
        setSlideLeft((el.scrollLeft += 200));
      };
      const moveLeft = () => {
        const el = document.getElementById(`hscroll`);
        setSlideLeft((el.scrollLeft -= 200));
      };

    const moviesToDisplay = movies.filter(movie => movie.user_id === currentUser.id)

    return(
        <div>
            
            {currentUser.length === 0 ? <></> : <h2 className="text-4xl leading-8 font-semibold mb-1 mt-10 px-3 text-slate-700">{currentUser.name}'s Watchlist</h2>}
            {currentUser.length === 0 ? <></> : <NavLink to="/movieform"><span className="text-slate-700 px-3 text-2xl">Add Movie for {currentUser.name}</span></NavLink>}
            <div className="my-12 mx-auto">
                <div className="relative overflow-hidden">
                    
                <ul id={`hscroll`} className="relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
                    {moviesToDisplay.map((movie) => 
                        <MovieCard movie={movie} key={movie.id} setMovies={setMovies} movies={movies} />    
                    )}
                    {currentUser.length === 0 ? <></> : <button className="bg-blue-900/75 fixed bottom-0 right-0 text-white w-10 h-full text-center opacity-75 hover:opacity-100 z-10 p-0 m-0 transition-all ease-in-out duration-300" onClick={moveRight}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span>Next</span>
                    </button>
                    }
                    {currentUser.length === 0 ? <></> : <button className="bg-blue-900/75 fixed bottom-0 left-0 text-white w-10 h-full text-center opacity-75 hover:opacity-100 z-10 p-0 m-0 transition-all ease-in-out duration-300" onClick={moveLeft}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span>Back</span>
                    </button>}
                    
                </ul>

                </div>
            </div> 
        </div>
    )
}

export default MovieList;