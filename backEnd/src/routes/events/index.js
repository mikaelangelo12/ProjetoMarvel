module.exports = app => {
    app.get('/events',  (req, res) => res.send(' Events, Olá Mundo'))
    app.post('/events',  (req, res) =>{
        res.send('VocÊ esta fazendo um post')})
}