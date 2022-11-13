import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Logo from './components/Logo';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';

function App() {

  const [input, setInput] = useState('');

  const agregar = val => {
    setInput(input + val)
  };

  const calcularResultado = () =>{
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor, ingresar valores para poder realizar los cálculo.');
    }
  };

  return (
    <div className='App'>
      <Logo />
      <div className='contenedor-principal'>
        <Pantalla input={ input } />
        <div className='fila'>
          <Boton manejarClick={ agregar }>1</Boton>
          <Boton manejarClick={ agregar }>2</Boton>
          <Boton manejarClick={ agregar }>3</Boton>
          <Boton manejarClick={ agregar }>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={ agregar }>4</Boton>
          <Boton manejarClick={ agregar }>5</Boton>
          <Boton manejarClick={ agregar }>6</Boton>
          <Boton manejarClick={ agregar }>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={ agregar }>7</Boton>
          <Boton manejarClick={ agregar }>8</Boton>
          <Boton manejarClick={ agregar }>9</Boton>
          <Boton manejarClick={ agregar }>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={ calcularResultado }>=</Boton>
          <Boton manejarClick={ agregar }>0</Boton>
          <Boton manejarClick={ agregar }>.</Boton>
          <Boton manejarClick={ agregar }>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>     
    </div>
  );
}

export default App;
