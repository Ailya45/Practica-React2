import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LanguagesTable from '../LanguagesTable';
import fotoPerfil from '../image/foto-perfil.jpg';
import { motion } from 'motion/react';

const RENDER_BASE_URL = 'https://api-likes-bermys.onrender.com';
const API_URL = `${RENDER_BASE_URL}/api/interests`;

const Portfolio = () => {
    const navigate = useNavigate();


    const [isOpen, setIsOpen] = useState(false);
    const [interests, setInterests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const toggleSlider = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        if (isOpen && interests.length === 0) {
            setLoading(true);
            setError(null);
            
            fetch(API_URL)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Error HTTP: ${res.status}`);
                    }
                    return res.json();
                })
                .then(data => {
                    setInterests(data.items);
                })
                .catch(err => {
                    console.error("Error al cargar la API:", err);
                    setError(`Error al conectar con la API: ${err.message}. ¿Está Express corriendo?`);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [isOpen, interests.length]);


    const renderContent = () => {
        if (loading) {
            return <p className="text-center italic text-gray-600 p-4">Cargando datos...</p>;
        }
        
        if (error) {
            return <p className="text-center italic text-red-500 p-4">{error}</p>;
        }

        if (interests.length === 0) {
             return <p className="text-center italic text-gray-600 p-4">Haga clic en la barra superior para cargar los datos.</p>;
        }

        return interests.map(item => (
            <div key={item.id} className="border-b border-dashed border-gray-200 py-2 last:border-b-0 px-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-700 text-sm mb-2">{item.summary}</p>
                <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                        <span key={tag} className="bg-teal-50 text-teal-800 text-xs px-2 py-1 rounded-md font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        ));
    };

    return (

        <motion.div
        initial = {{opacity: 0, y: 50}}
        animate = {{opacity: 1, y: 0}}
        transition={{duration: 0.7, ease: 'easeInOut'}}
        >
        
        <div className="flex flex-col items-center mx-auto p-6 max-w-2xl"> 
            
            <img className="img-circle rounded-full object-cover w-48 h-48" src={fotoPerfil} alt="foto-perfil" />
            <div className="flex-col items-center space-y-6 p-6 w-full"> 
                <h1 className = "text-3xl font-bold text-blue-100 text-center">Hola, soy Bermys</h1>
                <p className = "text-lg text-blue-100 text-center"> 
                    Tengo 24 años y soy un estudiante de Ingeniería en Sistemas de la UNEFA Núcleo Apure, Venezuela. 
                    Me gusta programar y aprender nuevas tecnologías.
                    Estoy aprendiendo React y TailwindCSS.
                    Me gusta el desarrollo web y móvil.
                    Espero poder aprender mucho en este semestre en Lenguaje III.
                </p>
                <h2 className = "text-2xl font-bold text-blue-100 text-center">Mis hobbies son:</h2>
            </div>

           
            <div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg mt-4">
                
                <div 
                    className="bg-blue-600 text-white p-4 cursor-pointer text-lg font-semibold flex justify-between items-center"
                    onClick={toggleSlider}
                >
                    <span>
                        GUSTOS PERSONALES
                    </span>
                    <span>{isOpen ? '▲' : '▼'}</span> 
                </div>

                
                <div 
                    className={`transition-all duration-300 ease-out overflow-hidden bg-white ${
                        isOpen ? 'max-h-[1000px] p-0' : 'max-h-0 p-0'
                    }`}
                >
                    <br />
                    {renderContent()}
                </div>
            </div>
            <br />
            <LanguagesTable />
            <div>
                
            </div>

            <div className='flex flex-col justify-center items-center gap-8 mt-8'>
                <h2 className = "text-2xl font-bold text-blue-100 text-center">
                    ¿Deseas ponerte en contacto conmigo? Ve a la sección de contacto.
                </h2>
                <button 
                    className="text-blue-100 text-2xl bg-blue-950 hover:bg-blue-700 transition py-2 px-4 rounded" 
                    onClick={() => navigate('/contact')}
                >
                    Contacto
                </button>
            </div>
        </div>
        </motion.div>
    );
}

export default Portfolio;