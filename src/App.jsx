import { Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio';
import Contacto from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
    </div>
  )
}

export default App