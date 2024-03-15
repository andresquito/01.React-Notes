import React from 'react'
import { useState } from 'react'

export const Usestate = ({value}) => {
    const[contador, setContador] = useState (value)

    const handleClick = ()=>{
        setContador(contador+1)
    }

  return (
    <>
    <h1>useState</h1>
    <p>{contador}</p>
    <button onClick={handleClick}>Click</button>
    
    </>

  )
}


//useState es un hook de react que permite agregar estado a los componentes