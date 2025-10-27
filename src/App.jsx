import { useState } from 'react'
import './App.css'
import Portfolio from './componentes/Portfolio'
import Contacto from './componentes/Contact'


function App() {
  const [paginaActual, setPaginaActual] = useState('Portfolio')

  const renderPagina = () => {
    if (paginaActual === 'Portfolio'){
      return <Portfolio cambiarPagina = {setPaginaActual} />
    }else if (paginaActual === 'Contacto'){
      return <Contacto cambiarPagina = {setPaginaActual} />
    }

  }
  return (
    <>
    <div className= "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
      {renderPagina()}
    </div>
      
    </>
  )
}


export default App
