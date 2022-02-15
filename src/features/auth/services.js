const db = require('../../_db/models/')

//Cria a consulta no banco de dados
module.exports = {
    auth: payload => db.User.findOne({ where: payload })
    
}