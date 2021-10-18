const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const db = require('../db/conectaDB')

module.exports = () =>{  

    const app = express()


    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    consign()
        .include('src/controllers/comics')
        .include('src/controllers/events')
        .include('src/controllers/personagens')
        .include('src/controllers/series')
        .include('src/controllers/stories')
        .into(app)

    return app
}