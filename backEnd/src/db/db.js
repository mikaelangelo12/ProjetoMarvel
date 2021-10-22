const mongoose = require('mongoose')


const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME} = process.env

mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?auth`
)

/*
const MongoClient  = require('mongodb').MongoClient;
MongoClient.connect("mongodb://admin:example@localhost:2700",
                                    {useUnifiedTopology: true},
                                    (error, connection) =>{
                                        if(error) return console.log('Deu um pequeno erro em %s',error);
                                        global.connection = connection.db("marvel")
                                        console.log("Conectado no Mongo")
                                    } );
*/
module.exports = {}