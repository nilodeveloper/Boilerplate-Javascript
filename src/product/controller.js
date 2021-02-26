const products = require('../mocks/products.json')
const product_message = require('../constants/product.message.json')
const knexfile = require('../../knexfile')
knex = require('knex')(knexfile.development)
const error = require('../errors')

const index = async (req, res) => {
    try{
        const users = await knex.select('nome').from('users') // TODO criar banco de dados para produtos
        res.send(users)
    }catch(e){
        let message = error(product_message.index_error, e)
        res.send(message)
    }
}

const detail = (req, res) => {
    try{
        res.send(product_message.mock_detail)
    }catch(e){
        let message = error(product_message.detail_error, e)
        res.send(message)
    }
}

module.exports = {index, detail}