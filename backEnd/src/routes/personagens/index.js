const { default: axios } = require("axios")

module.exports = app => {
      app.get('/api/personagens', async(req, res) => {
                // data fora do response
                const {data} = await axios('https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b')
                return res.json(data)
        })
        app.post('/api/personagens', (req, res) =>{
          res.send('Esta rota só faz Get')})

        app.put('/api/personagens', (req, res) =>{
          res.send('Esta rota só faz Get')})

        app.delete('/api/personagens', (req, res) =>{
          res.send('Esta rota só faz Get')})
}