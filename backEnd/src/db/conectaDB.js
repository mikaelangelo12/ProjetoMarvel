const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:2700/marvel/"
const client = new MongoClient(uri)


    async function run(){
        try{
            await client.connect()
            console.log('Conectando ao MongoDB!')
        } catch (err) {
            console.log("Deu um erro %s", err)
        }
    }
    run()

module.exports = client