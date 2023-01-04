const { Router } = require('express');
const express = require('express');
const { send } = require('express/lib/response');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'GET dentro da rota de produtos.'
    });
});

router.post('/',(req, res, next) => {
    res.status(201).send({
        mensagem:'POST dentro da rota de produtos.'
    });
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

module.exports = router