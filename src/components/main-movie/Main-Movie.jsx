import React from 'react'
import {Link}  from 'react-router-dom';
import '../main-movie/main-movie.css'
function MainMovie() {
  return (
    <div>
    <div className="main-movie main-container">
			<div className="main-container-movie">
				<h3 className="main-title">Interestellar</h3>
				<p className="main-description">
					Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.
				</p>
				<Link to="/" className='main-button-1'> Reproducir</Link>
				{/* <a role="button" className=""><i className="fas fa-play icon-play"></i>Reproducir</a> */}
				<Link to="/" className='main-button-2'> Más información</Link>
				{/* <a role="button" className="main-button"><i className="fas fa-info-circle"></i></a> */}
			</div>
		</div>
    </div>
  )
}

export default MainMovie
