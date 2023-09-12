const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());

//Puerto
const PORT = process.env.PORT || 5500;

//Para que use cualquier puerto
app.use(cors());

//Importar rutas
const TodoItemRoute = require('./routes/todoItems');

//Conexion a mongoDB
mongoose.connect('mongodb+srv://GabrielPoma:0123456789@todoapp.tzcvreh.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log("Base de datos conectada"))
.catch(err => console.log(err))

app.use('/', TodoItemRoute);

app.listen(PORT, ()=> console.log("Servidor conectado"));