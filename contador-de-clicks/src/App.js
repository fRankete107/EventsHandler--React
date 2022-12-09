import './App.css';
import { useState } from "react";
import logo from "./imagenes/logo.jpg";
import Boton from "./componentes/Boton.js";
import Contador from "./componentes/Contador";

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className="contenedor-imagen">
      <img 
        className="logo"
        src={logo}
        alt="logo"
      />
      </div>
      <h3>TE CUENTO LOS CLICKS</h3>
      <Contador numClicks={numClicks}/>
      <div className="contenedor-boton">
        <Boton
        texto="Click"
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton
        texto="Reiniciar"
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
