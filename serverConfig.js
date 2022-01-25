const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'password',
    database: 'ibelieve',
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

// npm run dev para rodar a api com nodemon


app.post('/cadastrar', (req, res) => {

    nome = req.body.nome,
    email = req.body.email,
    telefone = req.body.telefone,
    cpf = req.body.cpf,
    nascimento = req.body.nascimento,
    senha = req.body.senha,
    recomendou = req.body.recomendou,
    fotoUrl = null,
    nivel = 1

   const SQL_INSERT = 'INSERT INTO ibelieve.usuarios (nome, email, telefone, cpf, nascimento, senha, recomendou, fotoUrl, nivel) VALUES (?,?,?,?,?,?,?,?,?)'
   db.query(SQL_INSERT, [nome, email, telefone, cpf, nascimento, senha, recomendou, fotoUrl, nivel], (err, result) => {

    if(err) {

        console.log('Teve um erro --> ' + err);

    } else {

        res.send(result);
        console.log(result);

    }
    
})



})




app.listen(3001, () => {
   console.log('Servidor Rodando com Sucesso na porta 3001')
})

db.connect((err)=>{

    if(err) {
        console.log(err)
    } else {
        console.log('Conectou Com êxito !')
    }

})