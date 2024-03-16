import React, { useState } from 'react'

export const Formulario = () => {
    const [inputValue, setInputValue] = useState ('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
    }


    return (
        <form onSubmit={onSubmit} >
            <h1>Formulario</h1>
            <input 
            type="text"
            placeholder='Ingrese tarea'
            value={inputValue}
            onChange={onInputChange}
             />
        </form>

    )
}
