// server.js
const express = require('express');
const path = require('path');
const app = express();

// 1. CONFIGURACIÓN DEL PUERTO Y HOST (CLAVE PARA RENDER)
// Usa el puerto que Render asigna o 3000 como valor predeterminado
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; 

// 2. DEFINE LA RUTA DE LOS ARCHIVOS COMPILADOS
// Asegúrate de usar 'dist' si usas Vite, o 'build' si usas CRA.
const buildPath = path.join(__dirname, 'dist'); 

// 3. MIDDLEWARE PARA SERVIR ARCHIVOS ESTÁTICOS
app.use(express.static(buildPath));

// 4. FALLBACK PARA RUTAS (React Router)
// Para Single Page Applications (SPA), cualquier solicitud que no sea un archivo estático 
// debe devolver el index.html para que React Router maneje la ruta.
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// 5. INICIA EL SERVIDOR
app.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor de producción escuchando en http://${HOST}:${PORT}`);
});