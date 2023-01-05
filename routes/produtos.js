const { Router } = require('express');
const express = require('express');
const { send } = require('express/lib/response');
const router = express.Router();

console.log("Rota dos Produtos Iniciada")
//Retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'RETORNANDO PRODUTOS'
    })
});

//Adiciona um produto
router.post('/',(req, res, next) => {
    res.status(201).send({
        mensagem:'PRODUTO ADICIONADO'
    })
});

//Retorna dados de um produto
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

//Altera um produto
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem:'PRODUTO ALTERADO'
    })
});

//Deleta um produto
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'PRODUTO EXCLUIDO'
    })
});

module.exports = router;