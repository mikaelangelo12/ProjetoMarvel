const { default: axios } = require("axios")

module.exports = app => {
      app.get('/api/events', async(req, res) => {
                // data fora do response
                const {data} = await axios('https://gateway.marvel.com/v1/public/events?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b')
                console.log(data)
                return res.json(data)
        })
      app.post('/api/events', (req, res) =>{
                res.send('VocÊ esta fazendo um post')})
}