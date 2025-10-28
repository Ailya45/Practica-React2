import { FaArrowLeft } from "react-icons/fa";

const Contacto = ({cambiarPagina}) => {
    return(
        <div className="flex flex-col items-center space-y-6 p-6 max-w-2xl mx-auto">
            <div className="w-full flex justify-start">
            <button 
            className="text-blue-100 text-2xl" 
            onClick={() => cambiarPagina('Portfolio')}>
            <FaArrowLeft size = {20} />  
            </button>
            </div>
            <h1 className="text-3xl font-bold text-blue-100 text-center">Contacto</h1>
            <p className="text-lg text-blue-100 text-center">
                Puedes contactarme a través del siguiente formulario:
            </p>
            <form className="w-full max-w-md space-y-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-2 rounded bg-gray-800 text-blue-100 border border-gray-600"
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full p-2 rounded bg-gray-800 text-blue-100 border border-gray-600"
                />
                <textarea
                    placeholder="Mensaje"
                    className="w-full p-2 rounded bg-gray-800 text-blue-100 border border-gray-600"
                    rows={4}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Contacto