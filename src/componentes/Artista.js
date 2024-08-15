import React from "react";
import '../App.css'

function Artista(props){
    return(
        <div className="d-flex flex-column align-items-center justify-content-center p-3 mt-2" data-aos="flip-right" data-aos-duration={props.time}>
            <h5 className="text-center">{props.nombre}</h5>
        <img src={props.imagen} alt="" width="230px" className="m-2 rounded-circle img-artist" />
    </div>
    )
}

export default Artista;