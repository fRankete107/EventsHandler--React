import React from "react";

function Boton(props) {

    const esOperador = (num) => {
        return isNaN(num) && (num !== ".") && (num !== "=") ? true : false;
    };

    const esIgual = (num) => {
        return (num === "=" ? true : false);
    };

    return (
        <div
        className={`boton ${esOperador(props.children) ? "operador" : ""} ${esIgual(props.children) ? "igual" : ""}`.trimEnd()}
        onClick={()=>{
            props.manejarClick(props.children);
        }}
        >
            {props.children}
        </div>
    );
}

export default Boton;