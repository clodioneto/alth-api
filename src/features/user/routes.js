const controllers = require('./controllers')

//cria o "endpoint" da requisição e aplica as configurações importadas do controllers.js
module.exports = router => {
    router.post('/v1/api/user', controllers.create)
}