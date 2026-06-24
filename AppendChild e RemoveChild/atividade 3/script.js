let mensagem = document.getElementById("mensagem")
let contador = 0

function adicionarP(){
    contador++

    let p = document.createElement("p")
    p.innerText = "Bem vindo ao sistema! " + "(" + contador + ")"
    mensagem.appendChild(p)
}

function removerP(){
    mensagem.removeChild(mensagem.lastElementChild)
}

let button = document.getElementById("button")
let buttonR = document.getElementById("buttonR")

button.addEventListener("click", adicionarP)
buttonR.addEventListener("click", removerP)