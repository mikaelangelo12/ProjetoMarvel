module.exports = app =>{
    app.get('/cadastroQuadrinho',(req, res)=>{
        res.send("Cadastros de Quadrinhos")
    })
}