const authRoutes = require('../features/auth/routes')
const userRoutes = require('../features/user/routes')

//Exporta para a aplicação as rotas disponíveis 
module.exports = router => {
    authRoutes(router)
    userRoutes(router)
}