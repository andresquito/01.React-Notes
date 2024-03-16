import React, { useState } from 'react'

const Items = ({nombre, visto}) => {
    return(
        <li>
            {nombre}
            {visto ? '  (o)' : ' (x)'}
        </li>
    )
}  

export const Arreglouno = () => {
    const addTask =() => {
        setArreglo([...arreglo, {nombre: 'nuevo', visto: false}])
    }
    let listadoSecciones = [
        {nombre:'Instalaciones necesarias', visto:true},
        {nombre:'Uso de Vite', visto:true},
        {nombre:'Componentes', visto:true},
        {nombre:'Variables en Jsx', visto:true},
        {nombre:'Props', visto:true},
        {nombre:'Eventos', visto:true},
        {nombre:'useState', visto:true},
        {nombre:'Redux' ,visto:false},
    ]
    const [arreglo, setArreglo]=useState(listadoSecciones)
  return (
    <>
        <h1>Arreglouno</h1>    
    <ol>
        {arreglo.map(item=> <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
    </ol>
    <button onClick={()=> addTask()}>Agregar tarea</button>
    </>




  )
}