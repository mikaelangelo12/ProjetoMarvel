const express = require('express')
const consign = require('consign')

module.exports = () =>{
    const app = express()

    consign()
        .include('src/comics')
        .include('src/events')
        .include('src/personagens')
        .include('src/series')
        .include('src/stories')
        .into(app)

    return app
}