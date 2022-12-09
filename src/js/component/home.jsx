import React, { useState } from "react";
import Form from "./Form";
import Tarea from "./Tarea";

const Home = () => {

  const [tarea, setTarea] = useState('')
  const [listadoTareas, setListadoTareas] = useState([])
  const [contadorTareas, setContadorTareas] = useState(0)

  const contador = () =>{
    if (tarea != ""){
      setListadoTareas([...listadoTareas, {label: tarea, done: false}])
      setContadorTareas (contadorTareas + 1)
      }
  }

  function handleSubmit(e){
      e.preventDefault()

    if(tarea === ''){
      alert('Debes Agregar una Tarea')
      return
    }

    const nuevaTarea ={
      id: Date.now(),
      tarea: tarea,
      completado: false
    }
       const temp=[nuevaTarea, ...listadoTareas]
       setListadoTareas(temp)
       setTarea('')
       console.log(listadoTareas)
        }

  function handleChange(e){
    setTarea(e.target.value)
          console.log('tarea')
  }      

  function onBorrarTarea(id){
    setContadorTareas (contadorTareas -1)
    const temp = listadoTareas.filter(item => item.id !== id)
    setListadoTareas(temp)
  }
 
  return (
  <>
    <div className="main-container">
      <h1>Todo-List</h1>
      <div className="form-container">
        <Form 
          tarea={tarea}
          handleSubmit={handleSubmit}
          handleChange={handleChange}/>
      </div>
        <div className="tasks-container">
          <h2>Lista de Tareas</h2>
          <div>
            {
              listadoTareas.map(tarea => (
                <Tarea
                key={tarea.id}
                id={tarea.id}
                tarea={tarea}
                onBorrarTarea={onBorrarTarea}
                />
              ))
            }
          </div>
        </div>
    </div>
  </>  
  );
};

export default Home;



/*const [input, setInput] = useState("");
const app = () => {}

const keyDown =(event)=>{
  if (event.key === 'Enter'){
    console.log("has dado enter");
  }
	
}
return(
  <input type="text" onChange={(event)=>setInput(event.target.value)} onKeyDown={keyDown}/>

)*/ 