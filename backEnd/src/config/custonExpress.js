const express = require('express')
const router = express.Router();
const consign = require('consign')
const bodyParser = require('body-parser')

require('dotenv').config()

const cors = require('cors')
module.exports = () =>{  

    const app = express()

    const corsOptions ={
        origin: '*',
        optionsSucessStatus: 200
    }

    app.use(cors(corsOptions));

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

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