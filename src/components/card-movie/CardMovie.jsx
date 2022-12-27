import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,  
  useNavigate
  }  from 'react-router-dom';

  import Card from '@material-ui/core/Card';


import imageNotFound from '../../assets/img/nofound.jpg';




const CardMovie = ({ resultado, categoria }) => {

 const history =  useNavigate();
  let imagen;
  console.log(resultado.id)
  console.log(categoria)

  const recortarTitulo = (str) => {
    let strCorto = `${str.slice(0, 28)}...`
    return strCorto;
  }; 

  const cambiarRuta = (path) => {
    categoria = path
  }

  {categoria === `trendingMovie` && cambiarRuta(`movie`)}
  {categoria === `trendingSerie` && cambiarRuta(`tv`)}

  resultado.poster_path
  ? imagen=`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${resultado.poster_path}`
  : imagen= imageNotFound;

  return (
   <Card className="card .movie-cart"
          onClick = {()=> { console.log("hiciste click en la card ") 
          history.push(`/${categoria}/${resultado.id}`)}}>    
      <img className="card-img-top" src={imagen} alt="Card image cap"/>
      <div class="card-body">
         <h5 class="card-title">{ resultado.title
                  ? resultado.title.length < 28 
                        ? resultado.title 
                        : recortarTitulo(resultado.title)
                  : resultado.name 
                    ? resultado.name.length < 28 
                      ? resultado.name
                      : recortarTitulo(resultado.name)   
                    : resultado.name
                }</h5>
         {/* <p class="card-text">{} </p> */}
         <a href="#" class="btn btn-primary">VER</a>
      </div>

    
    </Card>


  );
}

export default CardMovie
