import React from "react";

export function Form(props){
    const {tarea, handleSubmit, handleChange} = props

    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="introduce la tarea" 
                onChange={handleChange}
                value={tarea}/>
             
        </form>
    )

}

export default Form;

