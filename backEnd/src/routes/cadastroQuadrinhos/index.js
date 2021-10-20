module.exports = app =>{
    app.get('/cadastroQuadrinho',(req, res) =>{
       return res.json({mensage: "Cadastrar Quadrinho"})
    })
}