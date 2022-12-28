import React, {useState} from 'react';
import {Link,useNavigate}  from 'react-router-dom';
import Card from '@material-ui/core/Card';
import ModalHome from '../modal/Modal-home';
import imageNotFound from '../../assets/img/nofound.jpg';
import '../card-movie/cardStyle.css'

const CardMovie = ({ resultado, categoria }) => {

  const [show, setShow] = useState(false);	 
  const handleShow = () => setShow(true);

 const history =  useNavigate();
  let imagen;
  console.log(resultado.id)
  console.log(categoria)

  const recortarTitulo = (str) => {
    let strCorto = `${str.slice(0, 28)}...`
    return strCorto;
  }; 
  const recortarDescripcion = (str) => {
    let strCorto = `${str.slice(0, 45)}...`
    return strCorto;
  }; 

  const cambiarRuta = (path) => {
    categoria = path
  }

  categoria === `trendingMovie` && cambiarRuta(`movie`)
  categoria === `trendingSerie` && cambiarRuta(`tv`)

  resultado.poster_path
  ? imagen=`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${resultado.poster_path}`
  : imagen= imageNotFound;

  return (
    <>
   <Card className="card movie-cart"
          onClick = {()=> { console.log("hiciste click en la card ") 
          history.push(`/${categoria}/${resultado.id}`)}}>    
      <img className="card-img-top" src={imagen} alt="Card image cap"/>
      <div className="card-body my-cardbody">
        <h5 className="card-title">{ resultado.title
                  ? resultado.title.length < 28 
                        ? resultado.title 
                        : recortarTitulo(resultado.title)
                  : resultado.name 
                    ? resultado.name.length < 28 
                      ? resultado.name
                      : recortarTitulo(resultado.name)   
                    : resultado.name
                }</h5>
          {resultado.overview.length==0?
          <p class="card-text">Sin descripción</p>
          :      
          <p class="card-text">{recortarDescripcion(resultado.overview)} </p>  }
        <Link to="/" className='main-button'  onClick={handleShow}>Mas info </Link>         
      </div>    
    </Card>
    <ModalHome estado={show}
				cambiarEstado={setShow}
				mostrarModal={true}
        data={resultado}				
				/>
		
    </>

  );
}

export default CardMovie
