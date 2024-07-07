import React from "react";
import '../App.css'

function Equipo(props){
    return(
        <div className="d-flex flex-column align-items-center justify-content-center text p-3">
            <h4 className="text-center">{props.nombre}</h4>
        <img src={props.imagen} alt="" width="270px" className="m-2 rounded-circle img-artist" />
        <h5 className="text-center">{props.profesion}</h5>
    </div>
    )
}

export default Equipo;