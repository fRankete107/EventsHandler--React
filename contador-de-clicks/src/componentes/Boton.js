import React from "react";

function Boton({ texto, esBotonDeClick, manejarClick }) {
    return (
        <button 
        className={esBotonDeClick ? "boton-click boton" : "boton-reiniciar boton"}
        onClick={manejarClick}>
            {texto}
        </button>
    )
}

export default Boton;