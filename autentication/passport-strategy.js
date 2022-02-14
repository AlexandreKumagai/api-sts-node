const passport = require('passport')
const PassportLocal = require('passport-local').Strategy
const StrategyBearer = require('passport-http-bearer').Strategy
const bcrypt = require('bcrypt')
const model = require('../database/models/ConsumerDAO');
const {InvalidArgumentError} = require('../Validator/InvalidArgumentError')
const jwt = require('jsonwebtoken')

function verificaSenha(client_secret, secret){
    const credencialValida =  bcrypt.compareSync(client_secret, secret)
    if(!credencialValida)
        throw new InvalidArgumentError('Credenciais invalidas')
}

passport.use(
    new PassportLocal({
        usernameField : 'client_id',
        passwordField : 'client_secret',
        session : false
    }, async (client_id, client_secret, done) => {
        try{
            const buscaCredenciais = await model.consultaPorClient(client_id)
            if(!buscaCredenciais)
                throw new InvalidArgumentError('Credenciais invalidas')
            verificaSenha(client_secret, buscaCredenciais.client_secret)
            return done(null, buscaCredenciais)
        }catch(erro){
            console.log(erro)
            return done(erro)
        }
    })
)



passport.use(
    new StrategyBearer(
        async (token, done) =>{
            try{
                if(!token)
                    throw new InvalidArgumentError('token invalido')
                const payload = jwt.verify(token,process.env.CHAVE_JWT, false)
                const login = await model.consultaPorClient(payload.id)
                return done(null, login)
            }
            catch(erro){
                return done(erro)
            }
    })
)
module.exports = passport;