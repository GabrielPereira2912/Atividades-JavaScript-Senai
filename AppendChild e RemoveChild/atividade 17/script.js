let button = document.getElementById("button")
let linhas = document.getElementById("linhas")
let contador = 0

button.addEventListener("click", function(){
    let linha = document.createElement("p")
    linha.innerText = "Você clicou no botão!"
    linhas.appendChild(linha)
})