import React from 'react'
import ReactDOM from 'react-dom/client'
import { Usestate } from './Components/Usestate'
import { Condicionales } from './Components/Condicionales'
import { Arreglouno } from './Components/Arreglouno'
import { Formulario } from './Components/Formulario'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Usestate value={0}/>
    <Condicionales/>
    <Formulario/>
    <Arreglouno />
  </React.StrictMode>,
)
