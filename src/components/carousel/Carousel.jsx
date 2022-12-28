import React, {useState, useEffect } from "react";
import CardMovie from "../card-movie/CardMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import "../carousel/carousel.css"
SwiperCore.use([Pagination,Navigation]);


const Carousel = ({categoria, subcategoria}) => {
  categoria='movie'
  subcategoria='popular'
  console.log(categoria)

  console.log(subcategoria)
  //const history = useNavigate();
 
  const BASE_URL = `https://api.themoviedb.org/3`
  const APIKEY = `c30046e601e1f588297bc67b7f52c812`;
  let queryParams = `?language=en-US&page=1&api_key=${APIKEY}`
  let ruta = ``
  console.log(ruta)


  const concatenarRuta = (pathASumar) => {
    ruta = ruta + pathASumar
  }
  

  categoria === `movie` && concatenarRuta("/movie")
  categoria === `tv` &&  concatenarRuta("/tv")
  categoria === `trendingMovie` && concatenarRuta(`/trending/movie/week`)
  categoria === `trendingSerie` && concatenarRuta(`/trending/tv/week`)
  subcategoria === `topRated` && concatenarRuta(`/top_rated`)
  subcategoria === `popular` && concatenarRuta(`/popular`)
  subcategoria === `nowPlaying` && concatenarRuta(`/now_playing`)
  subcategoria === `upcoming` && concatenarRuta(`/upcoming`)
  subcategoria === `onTheAir` && concatenarRuta(`/on_the_air`)


  const [resultados, setResultados] = useState([]);

  useEffect(() => {      
      const searchString = `${BASE_URL}${ruta}${queryParams}`
      console.log(searchString)

      fetch(searchString)
          .then(res => res.json())
          .then(data => {
              console.log(data.results)
              setResultados(data.results)
          })
  }, [BASE_URL, queryParams, ruta]);

  return (
    <div className="container-swiper">
    <h2 className="title-Swiper">Recomendados</h2>
      <hr className='hr-swiper'/>
    <Swiper 
          breakpoints={{
          375:{
            width: 375,
              slidesPerView: 1,
          },
           576: {
              width: 576,
              slidesPerView: 2,
           },
            768: {
               width: 768,
               slidesPerView: 3,
             },
             970: {
               width: 970,
               slidesPerView: 3,
             },
              1010: {
               width: 1010,
               slidesPerView: 3,
             },
           }}
              slidesPerView={3} 
              spaceBetween={4} 
              slidesPerGroup={4} 
              loop={true} 
              loopFillGroupWithBlank={false} 
              navigation={true}              
              className="mySwiper">
          {          
            resultados.map((resultado) => {
                return (
                  <div key={resultado.id}>      
                      <SwiperSlide  pagination={true} modules={[Pagination]}>
                          <CardMovie
                              resultado={resultado}
                              categoria={categoria}
                              />
                      </SwiperSlide>
                  </div>
                )
            })
        }       
      </Swiper>
    </div>
  )
}

export default Carousel