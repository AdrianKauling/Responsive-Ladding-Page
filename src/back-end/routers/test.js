const Routes = require('express').Router()

Routes.get('/', (req,res) => {
    res.send('Servidor rodando')
})

module.exports = Routes