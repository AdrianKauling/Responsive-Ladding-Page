const Sequelize = require('sequelize')
const datasDB = require('../config/db')

const connection = new Sequelize(datasDB)

connection.authenticate(()=> console.log(1+1)).catch(() => console.log('DB not connect'))

module.exports = connection