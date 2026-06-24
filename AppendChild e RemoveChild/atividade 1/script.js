let mensagem = document.getElementById("mensagem")

function adicionarP(){
    let p = document.createElement("p")
    p.innerText = "Bem vindo ao sistema!"
    mensagem.appendChild(p)
}

let button = document.getElementById("button")
button.addEventListener("click", adicionarP)