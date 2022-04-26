const {Sequelize} = require('sequelize')
const configDB = require('../config/db')
const News = require('../model/News')
const connection = new Sequelize(configDB)

News.init(connection)

module.exports = connection