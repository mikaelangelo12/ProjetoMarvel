const db = require('../db/db')

const sequence = {
    _id:1,
    get id() {return this._id++}
}

class Quadrinhos {
    constructor(nome, descricao, img){
        this.nome = nome
        this.descricao = descricao
        this.img = img
    }
    salvarQuadrinhos(quadrinhos){
        const quadrinhos = db.db().collection('quadrinhos')insertOne({
            nome: this.nome
            descricao: this.descricao
            img: this.img
        })
        return quadrinhos
    }
}
module.exports = Quadrinhos