const custonExpress = require('./config/custonExpress.js')
const app = custonExpress()
const porta = 3000

app.listen(porta, ()=> console.log("Servidor rodando"))

