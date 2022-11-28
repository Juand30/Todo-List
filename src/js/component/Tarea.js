import React, { useState } from "react";

export function Tarea(props){

    const {tarea, onBorrarTarea} = props

    /*const [butonAct, setButoonAct] = useState (false);    

    if (boton.onmouseover){
        ButoonAct=(true);
    }else{
        ButoonAct=(false);    
    }*/

        return (
            <>
                <div id={tarea.id}>
                    <span>{tarea.tarea}</span>
                    <button id="boton" className="btn" disabled={!butonAct}
                    onClick={()=> onBorrarTarea(tarea.id)}>
                       <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            
            </>
        );

}

export default Tarea;