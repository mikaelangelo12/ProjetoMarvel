const custonExpress = require('./config/custonExpress.js')

const app = custonExpress()

app.listen(3000, ()=> console.log("Servidor rodando"))

