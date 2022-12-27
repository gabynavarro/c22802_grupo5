import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../../assets/img/vidio_logo.png'
import '../nav/nav.css'
export const Nav=()=>{
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <img src={logo} alt="" className='app-logo my-nav'/>         

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/" className='nav-link active'>Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/nosotros" className='nav-link'>Nosotros</Link>
                </li>
                <li className="nav-item">
                <Link to="/contacto" className='nav-link'>Contacto</Link>
                </li>
                <li className="nav-item dropdown">
                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Video Opciones
                </a> 
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Mas buscadas</a></li>
                    <li><a className="dropdown-item" href="#">Mas vistas</a></li>
                    <li><a className="dropdown-item" href="#">Recomendadas</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
       </nav>
    </div>
    );
}

export default Nav;
