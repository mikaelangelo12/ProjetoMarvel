const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:8081/mikael"
const client = new MongoClient(uri)


    async function run(){
        try{
            await client.connect()
            console.log('Conectando ao MongoDB!')
        } catch (err) {
            console.log("Deu um erro na conexão ao MongoDB: %s", err)
        }
    }
    run()

module.exports = client