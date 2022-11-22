import React, { useState } from "react";

export function Tarea(props){

    const {tarea, onBorrarTarea} = props

 

        return (
            <>
                <div id={tarea.id}>
                    <span>{tarea.tarea}</span>
                    <button className="btn"
                    onClick={()=> onBorrarTarea(tarea.id)}>
                       <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            
            </>
        );

}

export default Tarea;