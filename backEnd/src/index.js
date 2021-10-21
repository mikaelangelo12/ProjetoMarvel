const custonExpress = require('./config/custonExpress.js')

const app = custonExpress()

// RODAR API COM NODE LOCAL
const porta = 3030

app.listen(porta, ()=> console.log("BackEnd Marvel Rodando na porta %s", porta))

// RODAR API COM NODE EM DOCKER
// app.start = onStart => {
//     app.listen(process.env.SERVER_PORT, '0.0.0.0', onStart)
//     return app
//   }


