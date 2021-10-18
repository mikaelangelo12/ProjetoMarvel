module.exports = app => {
      app.get('/comics',  (req, res) => res.send(' Comics, Olá Mundo'))
      app.post('/comics', (req, res) =>{
            res.send('VocÊ esta fazendo um post')})
}