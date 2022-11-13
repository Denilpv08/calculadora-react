import React from "react";
import '../css/Boton.css';

function Boton(props) {

  const esOperador = (valor) =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }

  return(
    <button 
    className={`boton-contenedor ${esOperador(props.children) ? 'operdador' : ''}`.trimEnd()} 
    onClick={() => props.manejarClick(props.children)}>
      { props.children }
    </button>
  );
}

export default Boton; 