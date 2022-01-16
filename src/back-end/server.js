const express = require('express')
const app = express()
const conexao = require('./database/connection')

const mainRouter = require('./routers/test')

app.use(mainRouter)

app.listen(3030, ()=> {
    console.log('server running...')
})