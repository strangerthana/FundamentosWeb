// Case sensitive = letras maiúsculas e minúsculas fazem diferença.
/*
Declaração de variáveis: 
var nome (não é muito utilizado atualmente)
let nome - variável clássica
const nome -> valores fixos.

por tag: getElementByTagName(h1)
por id: getElementById()
por nome: getElementByName()
por classe: getElementByClassName()
por seletor: quary Selector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

/*function validaAssunto(){

    if(assunto.value.length < 3){
        alert('Assunto inválido! Explique melhor o assunto.')
    }
}*/

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
    } 
    else{
        txtEmail.innerHTML = '✔'
        txtEmail.style.color = 'green'
        emailOk = true
    }
    
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 280){
        txtAssunto.innerHTML = 'O texto é muito grande, digite no máximo 280 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar (){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha o formulário corretamente antes de enviar.')
    }
}

function mapaZoom (){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal (){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

