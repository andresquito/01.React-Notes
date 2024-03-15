import React from 'react'

const Items = ({nombre, visto}) => {
    return(
        <li>
            {nombre}
            {visto ? '  (o)' : ' (x)'}
        </li>
    )
}  

export const Condicionales = () => {
  return (
    <>
    <h1>Condicionales</h1>    
    <ol>
        <Items nombre='Instalaciones necesarias' visto={true}></Items>
        <Items nombre='Uso de Vite' visto={true}></Items>
        <Items nombre='Componentes' visto={true}></Items>
        <Items nombre='Variables en Jsx' visto={true}></Items>
        <Items nombre='Props' visto={true}></Items>
        <Items nombre='Eventos' visto={true}></Items>
        <Items nombre='useState' visto={true}></Items>
        <Items nombre='Redux' visto={false}></Items>
        <Items nombre='customHooks' visto={false}></Items>
    </ol>
    </>

  )
}


//