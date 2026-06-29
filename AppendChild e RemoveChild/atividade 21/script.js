const gerarSenha = document.getElementById("gerarSenha")
const atender = document.getElementById("atender")
const senhas = document.getElementById("senhas")
let indice = 0

gerarSenha.addEventListener("click", function(){
    indice++
    let senha = document.createElement("li")
    senha.innerText = "senha " + indice
    senhas.appendChild(senha)
})

atender.addEventListener("click", function(){
    senhas.removeChild(senhas.lastChild)
})