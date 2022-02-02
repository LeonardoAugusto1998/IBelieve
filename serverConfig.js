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

    const SQL_SEARCH_EMAIL = 'SELECT * FROM ibelieve.usuarios WHERE email = ?'
    const SQL_SEARCH_CPF = 'SELECT * FROM ibelieve.usuarios WHERE cpf = ?'
    const SQL_SEARCH_RECOMENDOU = 'SELECT * FROM ibelieve.usuarios WHERE email = ?'
    const SQL_INSERT = 'INSERT INTO ibelieve.usuarios (nome, email, telefone, cpf, nascimento, senha, recomendou, fotoUrl, nivel) VALUES (?,?,?,?,?,?,?,?,?)'
    db.query(SQL_SEARCH_EMAIL, email, (err, result1) => {

        if(err) {

            console.log('Teve um erro --> ' + err);
            res.send(JSON.stringify('DEU_PROBLEMA'));
            return null;
    
        } else {

            if (JSON.stringify(result1) !== '[]'){
                res.send(JSON.stringify('EMAIL_EXISTE'));
                return null;
            } else {

                db.query(SQL_SEARCH_CPF, cpf, (err, result2) => {

                    if(JSON.stringify(result2) !== '[]'){

                        res.send(JSON.stringify('CPF_EXISTE'));
                        return null;

                    } else {

                        db.query(SQL_SEARCH_RECOMENDOU, recomendou, (err, result3) => {

                            if(JSON.stringify(result3) === '[]'){
                                res.send(JSON.stringify('NAO_EXISTE_RECOMENDOU'));
                                return null;
                            } else {
                                db.query(SQL_INSERT, [nome, email, telefone, cpf, nascimento, senha, recomendou, fotoUrl, nivel],
                                    (err, result) => {

                                        db.query(SQL_SEARCH_CPF, cpf, (err, result4) => {
                                            res.send(JSON.stringify(result4))
                                        })
                                        

                                    })
                            }
                        })
                    }
                })
            }
        }
    })
})



app.post('/login', (req, res) => {

    login = req.body.login,
    senha = req.body.senha

    const SQL_SELECT = 'SELECT * FROM ibelieve.usuarios WHERE email = ? AND senha = ?';
    db.query(SQL_SELECT, [login, senha], (err, result) => {

        if(err) {

            console.log('Teve um erro --> ' + err);
    
        } else {

            if (JSON.stringify(result) === '[]'){
                res.send(JSON.stringify(null));
            } else {
                res.send(result);
            }
        }
    })
})



app.post('/buscar', (req, res) => {

    email = req.body.email;
    const SQL_SELECT_REDES = 'SELECT * FROM ibelieve.usuarios WHERE recomendou = ?';

    db.query(SQL_SELECT_REDES, email, (err, result) => {
        if(err){
            console.log('Erro na busca das redes ' + err);
        } else {
            res.send(result);
            console.log(result);
        }
    })

})

app.post('/buscarRede', (req, res) => {

    email = req.body.email;
    const SQL_SELECT_REDES = 'SELECT * FROM ibelieve.usuarios WHERE recomendou = ?';

    db.query(SQL_SELECT_REDES, email, (err, result) => {
        if(err){
            console.log('Erro na busca das redes na pag Rede ' + err);
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