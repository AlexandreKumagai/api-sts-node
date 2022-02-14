const jwt = require('jsonwebtoken')
const model = require('../database/models/ConsumerDAO');

function geraJWT(user, expiration){
    const payload = {
        id: user.client_id
    }
    return jwt.sign(payload, process.env.CHAVE_JWT, {expiresIn : expiration })
}

module.exports = {
    autentica:
    (req, resp)=>{
        const token = geraJWT(req.user, process.env.EXPIRATION_TOKEN)
        resp.status(200).send({access_token: token})
    },
    verifica:
    async (req, resp)=>{
        try {
            resp.status(200).json({ resposta : 'valido'});    
        } catch (erro) {
            console.log(erro.message)
            resp.status(401).send({erro : erro.message})
        }       
    }
} 