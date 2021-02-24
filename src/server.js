require('dotenv').config()
const express = require('express')
const routes  = require('./routes')
const action  = require('./logs/server.log.json')

const server = () => {
    const app = express()
    app.use(routes)
    app.listen(process.env.PORT, ()=>{console.log(action.server_on)})
}

module.exports = server