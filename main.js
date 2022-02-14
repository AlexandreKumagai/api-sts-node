require('dotenv').config();
const configuracoes = require('./config/configuration.js')
const conexao = require('./database/conexao')
const cors = require('cors')

conexao.connect(erro => {
    if(erro){
        console.log('Erro conexão ao Banco de Dados' + erro)
    }else{
        console.log('Aplicação conectada ao Banco de Dados')
    }
})
 
const app = configuracoes()

app.use(cors())
const rotas = require('./rotas');
rotas(app);

app.listen(8081,() => console.log('===Servidor Iniciado==='))
