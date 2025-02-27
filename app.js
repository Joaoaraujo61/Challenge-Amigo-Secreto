
const butaoAdd = document.querySelector('.button-add')
const butaoSortear = document.querySelector('.button-draw')
const sorteado = document.querySelector('#resultado')

let arrayaAmigos = []

function adicionarAmigo() { 
    const inputAmigo = document.querySelector('#amigo')
    const listaAmigos = document.querySelector('#listaAmigos')
    
    if(!inputAmigo.value || inputAmigo.value.trim().length === 0 || !isNaN(inputAmigo.value)){
        window.alert('Valor inválido!')
    }else{
        arrayaAmigos.push(String(inputAmigo.value))
    }

    listaAmigos.innerHTML = arrayaAmigos.join('<br/>')
}

function sortearAmigo(){

}
