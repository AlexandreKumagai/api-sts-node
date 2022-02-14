const passport = require('./passport-strategy')


module.exports = {
    local: 
        (req, resp, next) =>{
            passport.authenticate('local',{session:false}, (err, login) =>{
                if(err)
                    return resp.status(401).send({erro: err.message})
                req.user = login
                return next();
            }
        )(req, resp, next);
    },
    bearer:
    (req, resp, next) =>{
        passport.authenticate('bearer',{session:false}, (err, login) =>{
            if(err){
                console.log('jwt expirado')
                return resp.status(401).send({erro: err.message})
            }
            if(!login)
                return resp.status(401).send({erro: 'login invalido'})
            req.user = login
            return next();
        }
    )(req, resp, next);
    }
}