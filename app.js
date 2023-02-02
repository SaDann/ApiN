const express = require ('express');
const app = express();
const morgan = require ('morgan');
const bodyParser = require('body-parser')

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header('Acces-Control-Allow-Origin', '*');
    res.header(
        'Acces-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type,Accept, Autorizathion'
        );

        if (req.method === 'OPTIONS'){
            res.header('Acces-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).send({});
        }
        next();
})

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

app.use((req, res, next) => {
    const erro = new Error('NÃO ENCONTRADO');
    erro.status = (404);
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro:{
            mensagem: error.message
        }
    });
});

console.log("Rotas Iniciadas...")

module.exports = app;