import React from 'react'
import MoviePic from '../styles/movie.jpg'
import MoviePic2 from '../styles/movie2.jpg'
import MoviePic3 from '../styles/movie3.jpg'
import MoviePic4 from '../styles/movie4.jpg'

const HomePage = ( ) => {


  return (
    <div className="w-full text-white">
      <div id="carouselControls" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-inner relative w-full">
          <div class="carousel-item active relative float-left w-full">
            <img src={MoviePic} class="block w-full" alt="Theater"/>
            <p class="absolute text-[60px] text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">Welcome to Betterloxd!</p>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src={MoviePic2} class="block w-full" alt="Theater"/>
            <p class="absolute text-[60px] text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">Create a watchlist!</p>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src={MoviePic3} class="block w-full" alt="Film"/>
            <p class="absolute text-[60px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Add your favorite movies!</p>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src={MoviePic4} class="block w-full" alt="Theater"/>
            <p class="absolute text-[60px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Thank you for being here!</p>
          </div>
        </div>
            <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselControls"
                    data-bs-slide="prev"
            >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
            </button>
            <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselControls"
                    data-bs-slide="next"
            >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
            </button>
      </div>
    </div>
  )
}

export default HomePage
