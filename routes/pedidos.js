const { Router } = require('express');
const express = require('express');
const { send } = require('express/lib/response');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'RETORNANDO PEDIDOS'
    })
});


router.post('/',(req, res, next) => {
    res.status(201).send({
        mensagem:'PEDIDO ADICIONADO'
    })
});


router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedidos
    if (id === 'especial'){
        res.status(200).send({
            mensagem:'DETALHES DO PEDIDO',
            id_pedido: id 
        });
    }
});


router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'PEDIDO EXCLUIDO'
    })
});

module.exports = router;