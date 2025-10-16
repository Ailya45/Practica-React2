import { useState } from 'react'
import './App.css'
import Inicio from './componentes/Portfolio'
import { Contacto } from './componentes/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className= "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
      {<Inicio />}
      {<Contacto />}
    </div>
      
    </>
  )
}

export default App
