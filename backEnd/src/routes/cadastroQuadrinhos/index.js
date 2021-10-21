const db = require('../../db/banco')
module.exports = app =>{

    app.get('/api/cadastroQuadrinho', (req, res ) => {
        res.send(db.getProdutos())
    })
    
    app.get('/api/cadastroQuadrinho/:id', (req, res) => {
        res.send(db.getProduto(req.params.id))
    })
    

    app.post('/api/cadastroQuadrinho', (req, res) => {
        const produto = db.salvarProduto({
            title: req.body.title,
            descricao: req.body.descricao,
            category: req.body.category,
            preco: req.body.preco,
            thumbnail: req.body.thumbnail,

        })
        res.send(produto) // JSON
    })
}