var form = document.querySelector('#formcontato')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    var mensagemErro = ['Erro: preencha o campo nome', 'Erro: preencha o campo email', 'Erro: preencha o campo telefone',
        'Erro: o campo telefone deve conter apenas números', 'Erro: preencha o campo de mensagem']
    var nome = document.querySelector('#nome')
    var email = document.querySelector('#email')
    var telefone = document.querySelector('#telefone')
    var mensagem = document.querySelector('#mensagem')
    var idmensagem = document.querySelector('#msg')

    if (!nome.value) {
        idmensagem.className = 'erro'
        idmensagem.textContent = mensagemErro[0]
        window.location.hash = ('#msg')
        return 
    }

    else if (!email.value) {
        idmensagem.className = 'erro'
        idmensagem.textContent = mensagemErro[1]
        window.location.hash = ('#msg')
        return 
    }

    else if (!telefone.value) {
        idmensagem.className = 'erro'
        idmensagem.textContent = mensagemErro[2]
        window.location.hash = ('#msg')
        return 
    }

    else if (!Number(telefone.value)) {
        idmensagem.className = 'erro'
        idmensagem.textContent = mensagemErro[3]
        window.location.hash = ('#msg')
        return 
    }

    else if (!mensagem.value) {
        idmensagem.className = 'erro'
        idmensagem.textContent = mensagemErro[4]
        window.location.hash = ('#msg')
        return 
    }
    else {
        idmensagem.textContent = 'Formulário enviado com sucesso!'
        idmensagem.className = 'sucesso'
        return limpar()
    }
})

function limpar(){
    nome.value = ''
    email.value = ''
    telefone.value = ''
    mensagem.value = ''
    nome.focus()
}




