import React from "react";
import '../App.css'
import '../styles/Lanzamientos.css'

function Nuevolanzamiento(props){
    return (
    <div className="d-flex flex-column align-items-center m-3">
        <lite-youtube videoid={props.video}></lite-youtube>
        <h4 className="">{props.artista}</h4>
        <h5>{props.titulo}</h5>
    </div>
    )
}

export default Nuevolanzamiento;