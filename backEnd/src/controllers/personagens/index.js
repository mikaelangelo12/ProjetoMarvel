module.exports = app => {
    app.get('/personagens',  (req, res) => res.send(' Personagens, Olá Mundo'))
    app.post('/personagens',  (req, res) =>{
        res.send('VocÊ esta fazendo um post')})
}