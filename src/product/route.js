const express = require('express');
const router  = express.Router();
const product_controller = require('./controller')

const product = [

    router.get('/products', (req, res)=>{
        product_controller.index(req, res)
    }),

    router.post('/products', (req, res)=>{
        product_controller.detail(req, res)
    })

]

module.exports = product