// Remover o modal ao clicar em algum botão
function removerModal(modalID) {
    const modal = document.getElementById(modalID)

    modal.addEventListener('click', function (remover) {
        if (remover.target.id == modalID) {
            modal.classList.remove('mostrar')
        }
    })
}

// Abre o modal e remove ao clicar fora da área de login ou cadastro
function iniciarModal(modalID) {
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')

    removerModal(modalID)
}

// Pegando os elementos e chamando o modal ao clicar no botão de entrar ou cadastrar na barra superior
const cadastrar = document.getElementById('cadastrar')
const entrar = document.getElementById('entrar')
const cancelar = document.getElementById('cancelar')
const modal_cadastro = document.getElementById('modal_cadastro')
const modal_login = document.getElementById('modal_login')


cancelar.addEventListener('click', () => {
    modal_cadastro.classList.remove('mostrar')
})

entrar.addEventListener('click', function () {
    iniciarModal('modal_login')
})

cadastrar.addEventListener('click', function () {
    iniciarModal('modal_cadastro')
})

// Botão de Primeiro Acesso
const primeiro = document.getElementById('primeiro')

primeiro.addEventListener('click', function () { 
    modal_login.classList.remove('mostrar') 
    iniciarModal('modal_cadastro')
})

// Coletando e validando os dados de cadastro
function coletandoValidandoDadosCadastro() {

    var nome = document.getElementById('nome')
    var email = document.getElementById('email')
    var senha1 = document.getElementById('senha1')
    var senha2 = document.getElementById('senha2')
    const criar = document.getElementById('criar')

    criar.addEventListener('click', function () {

        if (nome.value == '') {
            alert ('Nome de usuário inválido')
            nome.classList.add('erro')
        }

        else if (email.value == '') {
            alert ('E-mail inválido')
            email.classList.add('erro')
        }

        else if (senha1.value != senha2.value) {
            alert('As senhas não são iguais')
            senha1.classList.add('erro')
            senha2.classList.add('erro')
        }

        else if (senha1.value.length < 4 && senha2.value.length < 4) {
            alert('A senha deve conter no minimo 4 caracteres')
            senha1.classList.add('erro')
            senha2.classList.add('erro')
        }

        else {
            localStorage.setItem('nome', nome.value)
            localStorage.setItem('email', email.value)
            localStorage.setItem('senha1', senha1.value)
            localStorage.setItem('senha2', senha2.value)

            document.getElementById('modal_cadastro').classList.remove('mostrar')
            alert('Conta criada com sucesso!')
            setTimeout(() => { iniciarModal('modal_login') }, 300)

        }
    })
}


// Coletando e validando os dados de login
function coletandoValidandoDadosLogin() {

    const perfilID = document.getElementById('perfilID')
    const entrar_cadastrarID = document.getElementById('entrar_cadastrarID')
    const perfifoto = document.getElementById('foto_perfil')
    var quem_entrou = document.querySelector('.quem_entrou')
    var texto = document.createTextNode(localStorage.getItem('nome'))

    const email = document.getElementById('email_login')
    const senha = document.getElementById('senha_login')
    const logar = document.getElementById('logar')


    logar.addEventListener('click', function () {

        if (email.value == localStorage.getItem('email') && senha.value == localStorage.getItem('senha1')) {

            alert('Login realizado com sucesso!')
            document.getElementById('modal_login').classList.remove('mostrar')
            entrar_cadastrarID.classList.add('logar')
            perfilID.classList.remove('logar')

            //Chamando animação ao clicar no perfil
            perfifoto.addEventListener('click', function () {
                perfifoto.style.animation = ''
                setTimeout(() => perfifoto.style.animation = 'perfil .1s', .5)
            })

            quem_entrou.appendChild(texto)

        }
        else if (email.value != localStorage.getItem('email') || senha.value != localStorage.getItem('senha')) {
            alert('E-mail ou senha incorreto')
            email.classList.add('erro')
            senha.classList.add('erro')
        }
    })
}


coletandoValidandoDadosCadastro()
coletandoValidandoDadosLogin()