const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: '123456789',
    database: 'ibelieve',
})

app.use(cors());
app.use(express.json());

// npm run dev para rodar a api com nodemon


app.post('/cadastrar', (req, res) => {

    login = req.body.login,
    senha = req.body.senha

    db.query('SELECT * FROM ibelieve.usuarios WHERE login = (', [login],
    (err, result) => {
        res.send(result)
    })
    
    

})




app.listen(3001, () => {
   console.log('Servidor Rodando com Sucesso na porta 3001')
})