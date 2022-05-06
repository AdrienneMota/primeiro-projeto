let nome = document.querySelector('#name')
let labelName = document.querySelector('#labelName')
let validNome = false

let user = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let password_user = document.querySelector('#password_user')
let labelPassword = document.querySelector('#labelPassword')
let validPassword_user = false

let password_repeat = document.querySelector('#password_repeat')
let labelPassword_repeat = document.querySelector('#labelPassword_repeat')
let validPassword_repeat = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => { 

    if(nome.value.length <= 2){
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = "*Nome deve ter no mínimo 3 caracteres"
        validNome = false
    }else{
        labelName.setAttribute('style', 'color: green')
        labelName.innerHTML = "Nome"
        validNome = true
    }

})

user.addEventListener("keyup", () => {
    if(user.value.length <= 5){
        labelUser.setAttribute('style', 'color: red')
        labelUser.innerHTML = "*Usuário deve ter mais que 5 caracteres"
        validUser = false
    }else{
        labelUser.setAttribute('style', 'color: green')
        labelUser.innerHTML = "Usuário"
        validUser = true
    }
})

password_user.addEventListener('keyup', () => {
    if(password_user.value.length <= 6){
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = '*Senha deve ter mais que 6 caracteres'
        validPassword_user = false
    }else{  
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = 'Senha'
        validPassword_user = true
    }
})

password_repeat.addEventListener('keyup', () =>{
    if(password_repeat.value != password_user.value ){
        labelPassword_repeat.setAttribute('style', 'color: red')
        labelPassword_repeat.innerHTML = '*As senhas não são iguais'
        validPassword_repeat = false
    }else{
        labelPassword_repeat.setAttribute('style', 'color: green')
        labelPassword_repeat.innerHTML = 'Confirma Senha'
        validPassword_repeat = true
    }
})

function cadastrarUser(){
    if(validNome && validUser && validPassword_user && validPassword_repeat){
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')

        listUser.push(
        {
        nomeCad: nome.value,
        userCad: user.value,
        password_userCad: password_user.value
        }
        )

        localStorage.setItem('listUser', JSON.stringify(listUser))
        
        msgSuccess.setAttribute('style', 'display:block')
        msgSuccess.innerHTML = 'Cadastrando usuário...'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        setTimeout( () =>{
            window.location.href = './index.html'
        }, 3000)
        

    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha todos os campos corretamente para completar o cadastro'
    }
}

function validarUser(){
    usuariologin = document.querySelector('#user')
    usuariolabel = document.querySelector('#userlabel')
    senha = document.querySelector('#senha')
    senhalabel = document.querySelector('#senhalabel')

    let msgErro = document.querySelector('#msgErrorlogin')

    let listUsuario = []
        
    let validUsuario = {
        nome: '',
        usuario: '',
        senha: ''
    }

    listUsuario = JSON.parse(localStorage.getItem('listUser'))

    listUsuario.forEach((item) => {
        if(usuariologin.value == item.userCad && senha.value == item.password_userCad){
            validUsuario = {
                nome: item.nomeCad,
                usuario: item.userCad,
                senha: item.password_userCad
            }
        }        
    });

    if(usuariologin.value == validUsuario.usuario && senha.value == validUsuario.senha){
        setTimeout( () =>{
            window.location.href = './home.html'
        }, 3000)
    }else{
        let msgErrorlogin = document.querySelector('#msgErrorlogin')

        msgErrorlogin.setAttribute('style', 'display: block')
        msgErrorlogin.innerHTML = 'Senha ou usuário incorreto.'

       setTimeout( () =>{
            window.location.href = './home.html'
        }, 3000)
    }
    
}
