import React, { useState } from 'react'

const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {visto ? '  (o)' : ' (x)'}
        </li>
    )
}

export const Map = () => {
    let listadoSecciones = [
        { nombre: 'Instalaciones necesarias', visto: true },
        { nombre: 'Uso de Vite', visto: true },
        { nombre: 'Componentes', visto: true },
        { nombre: 'Props', visto: true },
        { nombre: 'Variables en Jsx', visto: true },
        { nombre: 'Eventos', visto: true },
        { nombre: 'useState', visto: true },
        { nombre: 'customHooks', visto: false },
        { nombre: 'Redux', visto: false },
    ]

    const [arreglo, setArreglo] = useState(listadoSelecciones)

    console.log(arreglo)
    return (

        <>
            <h1>Listado de Temas del Curso</h1>
            <ol>
                <Items> </Items>
            </ol>

        </>

    )
}

//1:44