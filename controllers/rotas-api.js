const controllerToken = require('./SecurityTokenService');
const middleware = require('../autentication/middleware-autentication')
module.exports = app => {
  
//---------------------TOKEN----------------------
    app
    .route('/token')
    .post(middleware.local,
        controllerToken.autentica);

    app
    .route('/token_info')
    .post(
        middleware.bearer,
        controllerToken.verifica)
}
//---------------------TOKEN----------------------