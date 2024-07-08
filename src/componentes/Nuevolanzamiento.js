import React from "react";
import '../App.css'
import '../styles/Lanzamientos.css'

function Nuevolanzamiento(props){
    return (
    <div className="d-flex flex-column align-items-center m-3">
        <iframe width="300" height="240" src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h5 className="">{props.artista}</h5>
        <h6>{props.titulo}</h6>
    </div>
    )
}

export default Nuevolanzamiento;