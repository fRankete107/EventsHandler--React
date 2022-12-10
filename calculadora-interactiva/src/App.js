import './App.css';
import Boton from "./componentes/Boton";
import Visual from "./componentes/Visual";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "math.js";
import logo from "./imagenes/logo.png";

function App() {

  const [input, setInput] = useState("");
  const agregarInput = val => {
    setInput(input + val);
  };
  const clear = () => {
    setInput("");
  };
  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input));
    };
  };

  return (
    <div className="App">
      <div className='imagen'>
        <img 
        src={logo} 
        alt="logo comunista" />
      </div>
      <h2>CALCULADORA COMUNISTA</h2>
      <div className='contenedor-calculadora'>
        <div className='celda grid-item'>
          <Visual input={input}/>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={agregarInput}>1</Boton>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={agregarInput}>2</Boton>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={agregarInput}>3</Boton>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={agregarInput}>4</Boton>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={agregarInput}>5</Boton>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={agregarInput}>6</Boton>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={agregarInput}>7</Boton>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={agregarInput}>8</Boton>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={agregarInput}>9</Boton>
        </div>
        <div className='celda grid-item'>
          <Boton manejarClick={calcularResultado}>=</Boton>
        </div>
      </div>
      <BotonClear manejarClick={clear}>Clear</BotonClear>
    </div>
  );
}

export default App;
