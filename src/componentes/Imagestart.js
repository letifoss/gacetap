import React from "react";
import logoprincipal from '../imagenes/logoblanco700.png';

function Imagestart(){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
        <section className="logo">
            <img src={logoprincipal} alt="logo gaceta" />
        </section>
        </div>
    )
}

export default Imagestart;