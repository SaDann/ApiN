const { Router } = require('express');
const express = require('express');
const { send } = require('express/lib/response');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'RETORNANDO PRODUTOS'
    })
});


router.post('/',(req, res, next) => {
    
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({
        mensagem:'PRODUTO ADICIONADO',
        produtoCriado: produto
    })  
});


router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial'){
        res.status(200).send({
            mensagem:'ID Especial',
            id: id 
        });
    } else{
        res.status(200).send({
            mensagem: 'Id Padrão'
        });
    }
});


router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem:'PRODUTO ALTERADO'
    })
});


router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'PRODUTO EXCLUIDO'
    })
});

module.exports = router;