const express = require('express')
const { json } = require('express')

const app = express()

app.use(json())
app.listen(3000)

app.get('/', async(req, res) =>{
    res.send("Olá Mundo")
})