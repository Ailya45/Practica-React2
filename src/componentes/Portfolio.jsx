import Contacto from './Contact'

const Portfolio = ({cambiarPagina}) => {
    return(
        <div className="flex-col items-center space-y-6 p-6 max-w-2xl">
        <h1 className = "text-3xl font-bold text-blue-100 text-center">Hola, soy Bermys</h1>
        <p className = "text-lg text-blue-100 text-center"> 
          Tengo 24 años y soy un estudiante de Ingenieria en Sistemas de la UNEFA Nucelo Apure, Venezuela. 
          Me gusta programar y aprender nuevas tecnologias.
          Estoy aprendiendo React y TailwindCSS.
          Me gusta el desarrollo web y movil.
          Espero poder aprender mucho en este semestre en Lenguaje III.
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
        <div>
            <h2 className = "text-2xl font-bold text-blue-100 text-center">
                ¿Deseas ponerte en contacto conmigo? Ve a la seccion de contacto.
            </h2>
            <button className="text-blue-100 text-2xl text-center" onClick={ () => cambiarPagina('Contacto')}>Contacto</button>
        </div>
        </div>

    )
}

export default Portfolio
