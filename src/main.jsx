import React from 'react'
import ReactDOM from 'react-dom/client'
import { Usestate } from './Components/Usestate'
import { Condicionales } from './Components/Condicionales'
import { Map } from './Components/Map'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Usestate value={0}/>
    <Condicionales/>
    <Map/>
  </React.StrictMode>,
)
