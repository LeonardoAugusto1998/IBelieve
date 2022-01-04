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


app.post('/mandar', (req, res) => {

    login = req.body.login,
    senha = req.body.senha

    console.log(login + senha);
    console.log('Deu certo');

})




var server = app.listen(3001, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(host + ' ' + port)
})

db.connect((err) => {
    if(err){
        console.log('Teve um erro po =>' + err)
    } else {
        console.log('Conectou')
    }
})