const products = require('../mocks/products.json')
const products_message = require('../constants/product.message.json')
const error = require('../errors')

const index = (req, res) => {
    try{
        res.send(products)
    }catch(e){
        let message = error(products_message.index_error, e)
        res.send(message)
    }
}

const detail = (req, res) => {
    try{
        res.send("retornar produto específico")
    }catch(e){
        let message = error(products_message.detail_error, e)
        res.send(message)
    }
}

module.exports = {index, detail}