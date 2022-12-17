import React from 'react'
import logo from '../../../assets/img/vidio_logo.png'
import '../nav/nav.css'
export const Nav=()=>{
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <img src={logo} alt="" width="70" height="34" className='app-logo'/>           

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" >Home</a> 
                </li>
                <li class="nav-item">
                 <a class="nav-link" href="#">Nosotros</a> 
                </li>
                <li class="nav-item">
                 <a class="nav-link" href="#">Contacto</a> 
                </li>
                <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Video Opciones
                </a> 
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Mas buscadas</a></li>
                    <li><a class="dropdown-item" href="#">Mas vistas</a></li>
                    <li><a class="dropdown-item" href="#">Recomendadas</a></li>
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
