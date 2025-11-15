import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const likes = [
  {
    id: 'g-001',
    title: 'Series y peliculas que me gustan',
    summary:
      'Me gusta el anime y muchos de sus generos, así como las peliculas de accion, aventura y romance.',
    tags: ['anime', 'peliculas', 'generos'],
  },
  {
    id: 'g-002',
    title: 'Lenguajes de programacion que uso y estudio',
    summary: 'Los lenguajes de programación que uso son C++, HTML/CSS, SQL y estoy aprendiendo Java, Javascript y Kotlin.',
    tags: ['lenguaje', 'progrmacion', 'tecnologia'],
  },
  {
    id: 'g-003',
    title: 'Los videojuegos que disfruto jugar',
    summary:
      'Los juegos que más disfruto son Zenless Zone Zero y Counter Strike 2, así como algunos juegos de consola como Elden Ring y Stellar Blade.',
    tags: ['juegos', 'accion', 'gacha'],
  },
]

/*  const protectedReports = [
  {
    id: 'm-900',
    title: 'Metas para el próximo año · Q3',
    summary:
      'Mis metas para el próximo año son dominar apropiadamente el desarrollo web y el desarrollo de apliaciones móviles y de escritorio, así como ampliar los conocimientos que ya tengo.',
    tags: ['meta', 'conocimiento', 'habilidades'],
  },
]*/

app.get('/', (_req, res) => {
  res.json({
    message: 'Unidad 3 · API de gustos personales',
    routes: {
      public: ['/likes'],
    },
  })
})

app.get('/api/interests', (_req, res) => {
  res.json({ total: likes.length, items: likes })
})

/*app.get('/news/highlights', (_req, res) => {
  res.json({
    items: news.slice(0, 2),
    tip: 'Combina polimorfismo con validaciones para adaptar cómo consumes cada fuente de datos.',
  })
})

app.get('/news/tags/:tag', (req, res) => {
  const { tag } = req.params
  const filtered = news.filter((item) => item.tags.includes(tag.toLowerCase()))
  res.json({ tag, total: filtered.length, items: filtered })
})

app.get('/reports', (req, res) => {
  const token = req.headers['x-api-key']
  if (token !== 'super-seguro-1234') {
    res.status(401).json({ error: 'Acceso no autorizado. Solicita tu API key al facilitador.' })
    return
  }

  res.json({ total: protectedReports.length, items: protectedReports })
})*/

const PORT = process.env.PORT || 4173
app.listen(PORT, () => {
  console.log(`API de noticias escuchando en http://localhost:${PORT}/api/interests`)
})
