const services = require('./services')
const Boom = require('boom')
const jwt = require('jsonwebtoken')

const validator = require('fastest-validator')

// Instancia um objeto da classe fastest-validator
const v = new validator()

//Exporta o módulo com as configurações de consulta e validação das requisições
module.exports = {
    auth: async ctx => {
        //Atribui as propriedades do contexto desestruturando ao novo objeto
        const { request, response } = ctx

        //Esquema de validação das propriedades da requisição
        const schema = {
            email: { max: 255, min: 5, type: 'string' },
            password: { max: 16, min: 8, type: 'string'}
        }
        //Valida o conteúdo do corpo da requisição utilizando o objeto "schema" como parâmetro de validação.
        const errors = v.validate(request.body, schema)

        //Atribui status e aplica a biblioteca de erros Boom à resposta da requisição
        if(Array.isArray(errors) && errors.length) {
            response.status = 400
            return response.body = Boom.badRequest(null, errors)
        }

        //Cria a query a partir do serviço e atribui ao user
        const user = await services.auth(request.body)
        
        //Transforma a resposta de requisição em token (jwt)
        if (user) {
            response.body = { 
                result: jwt.sign({ email: user.email}, 'testetoken')
            }
        } else {
            response.status = 401
            response.body = { result: Boom.unauthorized() }
        }

        
    }
}