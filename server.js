// const express = require('express');
// const server = express();
// // const host = '127.0.0.1';
// const port = 3000;
// const listViewRouter = require('./list-view-router');
// const listEditRouter = require('./list-edit-router');

// // const tasks = [
// //   { id: 1, description: 'Hacer la compra', completed: false },
// //   { id: 2, description: 'Estudiar Node.js', completed: true },
// //   { id: 3, description: 'Hacer ejercicio', completed: false },
// // ];


// server.get('/', (req, res) => {
//   res.send('Hola mundo');
// });
// server.use('/list-view', listViewRouter);
// server.use('/list-edit', listEditRouter);


// // const server = http.createServer((req, res) => {
// //   if (req.url === '/tasks' && req.method === 'GET') {
// //     res.setHeader('Content-Type', 'application/json');
// //     res.end(JSON.stringify(tasks));
// //   } else {
// //     res.statusCode = 404;
// //     res.end('Ruta no encontrada');
// //   }
// // });

// server.listen(port, () => {
//   console.log(`Servidor en funcionamiento en http://localhost:${port}`);
// });

// module.exports = server
const express = require('express');
const app = express();
const listEditRouter = require('./list-edit-router');
const listViewRouter = require('./list-view-router');
const { validateHTTPMethods } = require('./validationMiddleware');
app.use(express.json());
 

// Agrega el middleware de validación de métodos HTTP a nivel de aplicación
app.use(validateHTTPMethods);

// Agrega los enrutadores a la aplicación
app.use('/edit', listEditRouter);
app.use('/view', listViewRouter);

// Define otras rutas y configuraciones aquí

app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});
