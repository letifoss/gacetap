import React from "react";

function Equipo(props){
    return(
        <div class="d-flex flex-column align-items-center justify-content-center p-3" data-aos="flip-right" data-aos-duration={props.time}>
            <h4 class="text-center">{props.nombre}</h4>
        <img src={props.imagen} alt="" width="270px" class="m-2 rounded-circle img-artist" />
        <h5 class="text-center">{props.profesion}</h5>
    </div>
    )
}

export default Equipo;