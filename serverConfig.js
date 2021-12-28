const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// npm run dev para rodar a api com nodemon

const db = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: '123456789',
    database: 'ibelieve'
})

app.post('/mandar', (req, res) => {

    login = req.body.login,
    senha = req.body.senha

    console.log(login + senha)
})




app.listen(3001, () => {
    console.log('Rodando Servidor Com sucesso !')
})