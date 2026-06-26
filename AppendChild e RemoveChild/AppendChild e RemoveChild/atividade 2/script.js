let mensagem = document.getElementById("mensagem")
let contador = 0

function adicionarP(){
    contador++

    let p = document.createElement("p")
    p.innerText = "Bem vindo ao sistema! " + "(" + contador + ")"
    mensagem.appendChild(p)
}

let button = document.getElementById("button")
button.addEventListener("click", adicionarP)