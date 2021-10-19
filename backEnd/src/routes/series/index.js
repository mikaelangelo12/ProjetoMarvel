module.exports = app => {
    app.get('/series',  (req, res) => res.send(' Series, Olá Mundo'))
    app.post('/series',  (req, res) =>{
        res.send('VocÊ esta fazendo um post')})
}