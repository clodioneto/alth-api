const db = require('../../_db/models')

//Cria a consulta no banco de dados
module.exports = {
    create: payload => db.User.create(payload)
}