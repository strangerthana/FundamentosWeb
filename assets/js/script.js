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

nome.style.width = '100%'
email.style.width = '100%'

function validaAssunto(){

    if(assunto.value.length < 3){
        alert('Assunto inválido! Explique melhor o assunto.')
    }
}

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
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
    }
    
}
