// modelo base para que nuestra API web funcione, y que, al realizar una peticion, devuelva un hello world

const express = require('express');
const app = express();
const port = 3000;

// para el directorio raiz, la respuesta es la siguiente:
app.get('/', (req, res) => {
    //req es la peticion
    //res es la respuesta
    console.log(req);
    res.status(200).send('Hello world')
})

// la aplicacion estara a la espera de cualquier peticion entrante con el codigo siguiente:
app.listen(port, () => {
    console.log('Server started at port 3000.');
})