import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../modal/modal-home.css'
const ModalHome=(
	{
	estado,
	cambiarEstado,
  data,
  } )=> {

   const handleClose = () => {
    return !estado;
   };
 

  return (
    <>    
      <Modal show={estado} onHide={cambiarEstado} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title'>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  >
            Ver
          </Button> 
      
        </Modal.Footer>   
       
      </Modal>
   
    </>
  );
}

export default ModalHome
