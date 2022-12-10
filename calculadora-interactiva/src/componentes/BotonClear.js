import React from "react";

function BotonClear(props) {
    return (<div className="clear" onClick={props.manejarClick}>
        {props.children}
    </div> )
};

export default BotonClear;