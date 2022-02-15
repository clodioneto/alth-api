const koa = require('koa')
const Router = require('koa-router')
const applyRoutes = require('./routes')
const bodyParser = require('koa-bodyparser')

//Cria novas instâncias do servidor e do controle de rotas.
const app = new koa()
const router = new Router()

module.exports = () => {
    //Aplica os múdulos de rotas exportados pelo router.js
    applyRoutes(router)

    //"Starta" o servidor
    app.use(bodyParser()).use(router.routes(), router.allowedMethods())

    //Configura a porta
    app.listen(8000)
}