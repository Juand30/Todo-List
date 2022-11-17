import React from "react";

export function Form(props){
    const {tarea, handleSubmit, handleChange} = props

    const keyDown =(event)=>{
        if (event.key === 'Enter'){
          console.log("has dado enter");
        }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="introduce la tarea" 
                onChange={handleChange}
                value={tarea}/>
            <input
                type="submit"
                className="btn"
                value="AGREGAR"
                onClick={handleSubmit}/>    
        </form>
    )

}

export default Form;


const keyDown =(event)=>{
    if (event.key === 'Enter'){
      console.log("has dado enter");
    }
      
  }
  return(
    <input type="text" onChange={(event)=>setInput(event.target.value)} onKeyDown={keyDown}/>