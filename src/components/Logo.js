import React from "react";
import logoPrincipal from '../img/logo.png';

function Logo (){
  return(
    <div className='logo-contenedor'>
      <img src={ logoPrincipal } className='logo' alt='Logo principal' />
    </div>
  );
}

export default Logo;
