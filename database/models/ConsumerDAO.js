const conexao = require('../conexao')

class ConsumerDAO{
    consultaPorClient(client_id){
        const sql = 'SELECT * FROM consumer WHERE client_id = ?'
        return new Promise((resolve, reject) => {
            
            conexao.query(sql, client_id , (err, resp) => { 
                if(err)
                    return reject ('rejeitado!')
                if(resp  && resp.length == 1)
                    return resolve(resp[0])
                return resolve()
            })
        })
    }
}

module.exports = new ConsumerDAO()