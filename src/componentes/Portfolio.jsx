function Inicio() {
    return(
        <div className="flex-col items-center space-y-6 p-6 max-w-2xl">
        <h1 className = "text-3xl font-bold text-blue-100 text-center">Hola, soy Bermys</h1>
        <p className = "text-lg text-blue-100 text-center"> 
          Soy un estudiante de Ingenieria en Sistemas de la UNEFA, 
          me gusta programar y aprender nuevas tecnologias.
          Estoy aprendiendo React y TailwindCSS.
          Me gusta el desarrollo web y movil.
          Espero poder aprender mucho en este curso.
        </p>
        <h2 className = "text-2xl font-bold text-blue-100 text-center">
          Mis hobbies son:
        </h2>
        <div className = "list-disc list-inside text-blue-100 text-center" >
          <ul>
          <li>Leer</li>
          <li>Escuchar musica</li>
          <li>Jugar videojuegos</li>
          <li>Ver peliculas y series</li>
          <li>Aprender nuevas tecnologias</li>
          <li>Programar</li>
        </ul>
        </div>
        </div>
    )
}

function Contacto() {
    return(
        <div className="flex flex-col items-center space-y-6 p-6 max-w-2xl mx-auto">
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

export default Inicio
export { Contacto }