module.exports = app => {
    app.get('/stories',  (req, res) => res.send(' Stories, Olá Mundo'))
    
    app.post('/stories',  (req, res) =>{
        res.send('VocÊ esta fazendo um post')})
}