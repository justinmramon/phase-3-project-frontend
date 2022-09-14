import React from 'react'
import MovieCards from './MovieCards'

const Movies = ( { movies, setMovies }) => {
  return (
    <div className="grid gap-x-20 gap-y-40 grid-cols-[320px_320px_320px_320px] grid-rows-[340px_340px_340px_340px] mt-5">{movies.map((movie) => 
        <MovieCards movie={movie} key={movie.id} setMovies={setMovies} movies={movies} />
        )}
    </div>
  )
}

export default Movies