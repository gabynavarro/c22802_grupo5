import React from 'react'
import '../carousel/carousel.css'
const Carousel = () => {
  return (
    <div class="popular-movies carousel-container">
    <div class="container-title-controls">
      <h3>Películas Recomendadas</h3>
      <div class="controls-index"></div>
    </div>

    <div class="container-principal">
      <button role="button" id="left-arrow" class="left-arrow"><i class="fas fa-angle-left"></i></button>

      <div class="container-carousel">
        <div class="carousel">
          <div class="movie-carousel">
            <a href="#"><img src="../../assets/img/1.png" alt=""/></a>
          </div>
          <div class="movie-carousel">
            <a href="#"><img src="../../assets/img/2.png" alt=""/></a>
          </div>
          <div class="movie-carousel">
            <a href="#"><img src="../../assets/img/3.png" alt=""/></a>
          </div>
          <div class="movie-carousel">
            <a href="#"><img src="../../assets/img/4.png" alt=""/></a>
          </div>
          <div class="movie-carousel">
            <a href="#"><img src="../../assets/img/5.png" alt=""/></a>
          </div>
          <div class="movie-carousel">
            <a href="#"><img src="../../assets/img/6.png" alt=""/></a>
          </div>
         
        </div>
      </div>

      <button role="button" id="right-arrow" class="right-arrow"><i class="fas fa-angle-right"></i></button>
    </div>
  </div>
  )
}

export default Carousel
