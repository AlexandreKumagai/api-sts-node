const campoIdAutor = 'id_autor'
const campoConteudo = 'conteudo'
const campoTitulo = 'titulo'
const campoEmail = 'email'
const campoNome = 'nome'
const campoMensagem = 'mensagem'
const campoAssunto = 'assunto'
const campoTelefone = 'telefone'
const campoTipoPessoa = 'tipo pessoa'
const campoCpfCnpj = 'cpf/cnpj'

const mensagemCampoObrigatorio = 'Campo obrigatório'
const mensagemCampoSemArroba = 'Campo sem o @'


class Validador{

    geraRegistro(campo, eValido, mensagemErro){
        const registro = {
           campo : campo,
           valido : eValido,
           mensagem : mensagemErro
        }
        return registro
    }

    validadorPost(registro){
        const tamanhoEmailValido = registro.email
        const contemArroba = registro.email.includes('@')
        var validacoes = []
        validacoes.push(this.geraRegistro(campoEmail, tamanhoEmailValido, mensagemCampoObrigatorio)) 
        if(tamanhoEmailValido)       
            validacoes.push(this.geraRegistro(campoEmail, contemArroba, mensagemCampoSemArroba))      
        const erros = validacoes.filter(registro => !registro.valido)
        return erros
    }
    validadorPostBlog(blog){
        const tamanhoConteudoValido = blog.conteudo
        const tamanhoTituloValido = blog.titulo
        const PossuiIdAutor = blog.id_autor
        var validacoes = []
        validacoes.push(this.geraRegistro(campoConteudo, tamanhoConteudoValido, mensagemCampoObrigatorio))        
        validacoes.push(this.geraRegistro(campoTitulo, tamanhoTituloValido, mensagemCampoObrigatorio))      
        validacoes.push(this.geraRegistro(campoIdAutor, PossuiIdAutor, mensagemCampoObrigatorio))      
        const erros = validacoes.filter(registro => !registro.valido)
        return erros

    }
    validadorPostDuvida(duvida){
        const possuiNome = duvida.nome
        const possuiEmail = duvida.email
        const possuiTelefone = duvida.telefone
        const possuiAssunto = duvida.assunto
        const possuiMensagem = duvida.mensagem
        const contemArroba = duvida.email.includes('@')
        var validacoes = []
        validacoes.push(this.geraRegistro(campoNome, possuiNome, mensagemCampoObrigatorio))     
        validacoes.push(this.geraRegistro(campoEmail, possuiEmail, mensagemCampoObrigatorio))   
        validacoes.push(this.geraRegistro(campoEmail, contemArroba, mensagemCampoSemArroba))
        //validacoes.push(this.geraRegistro(campoTelefone, possuiTelefone, mensagemCampoObrigatorio))     
        validacoes.push(this.geraRegistro(campoAssunto, possuiAssunto, mensagemCampoObrigatorio))     
        validacoes.push(this.geraRegistro(campoMensagem, possuiMensagem, mensagemCampoObrigatorio))        
        const erros = validacoes.filter(registro => !registro.valido)
        return erros

    }
    validadorPostCliente(cliente){
        const possuiNome = cliente.nome
        const possuiCpfCnpj = cliente.email
        const possuiTelefone = cliente.telefone
        const possuiEmail = cliente.email
        const possuiTipoPessoa = cliente.tipo_pessoa
        
        var validacoes = []
        validacoes.push(this.geraRegistro(campoNome, possuiNome, mensagemCampoObrigatorio))     
        validacoes.push(this.geraRegistro(campoEmail, possuiEmail, mensagemCampoObrigatorio))   
        validacoes.push(this.geraRegistro(campoTelefone, possuiTelefone, mensagemCampoObrigatorio))     
        validacoes.push(this.geraRegistro(campoTipoPessoa, possuiTipoPessoa, mensagemCampoObrigatorio))     
        validacoes.push(this.geraRegistro(campoCpfCnpj, possuiCpfCnpj, mensagemCampoObrigatorio))        
        const erros = validacoes.filter(registro => !registro.valido)
        return erros
    }
}

module.exports = new Validador()