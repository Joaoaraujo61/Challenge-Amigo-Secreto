
let arrayaAmigos = []

function adicionarAmigo() { 
    const inputAmigo = document.querySelector('#amigo')
    const listaAmigos = document.querySelector('#listaAmigos')
    
    if(!inputAmigo.value || inputAmigo.value.trim().length === 0 || !isNaN(inputAmigo.value)){
        window.alert('Valor inválido!')
    }if(arrayaAmigos.includes(inputAmigo.value)){
        window.alert('Amigo já inserido, tente outro!')
    }else{
        arrayaAmigos.push(String(inputAmigo.value))
    }

    listaAmigos.innerHTML = arrayaAmigos.join('<br/>')
}

function sortearAmigo(){
    const sorteado = document.querySelector('#resultado')

    let min = 0
    let max = arrayaAmigos.length - 1
    let sorteio = Math.floor(Math.random() * (max-min+1) + min)

    sorteado.innerHTML = arrayaAmigos[sorteio]
}
