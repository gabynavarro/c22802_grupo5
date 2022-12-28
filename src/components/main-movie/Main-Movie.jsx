import React, {useState} from 'react'
import {Link}  from 'react-router-dom';
import ModalHome from "../modal/Modal-home"
import '../main-movie/main-movie.css'

function MainMovie() {
	 const [show, setShow] = useState(false);

	 
	 const handleShow = () => setShow(true);

  return (
    <div>
    	<div className="main-movie main-container">
			<div className="main-container-movie">
				<h3 className="main-title">Interestellar</h3>
				<p className="main-description">
					Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.
				</p>			
				<Link to=""  className='main-button-1' onClick={handleShow}> Reproducir</Link>
				<Link to="" className='main-button-2' onClick={handleShow}> Más información</Link>
			</div>
			{/* <ModalHome estado={show}
				cambiarEstado={setShow}
				mostrarModal={true}				
				/> */}
		</div>
    </div>
  )
}

export default MainMovie
