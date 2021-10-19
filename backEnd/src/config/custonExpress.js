const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const db = require('../db/db')

module.exports = () =>{  
    console.log(db)
    const app = express()


    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    consign()
        .include('src/routes/cadastroQuadrinhos')
        .include('src/routes/comics')
        .include('src/routes/events')
        .include('src/routes/personagens')
        .include('src/routes/series')
        .include('src/routes/stories')
        .into(app)

    return app
}