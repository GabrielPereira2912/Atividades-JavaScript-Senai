let cButton = document.getElementById("cButton")
let botoes = document.getElementById("botoes")

cButton.addEventListener("click", function (){
    let nButton = document.createElement("button")
    nButton.innerText = "Novo botão"
    botoes.appendChild(nButton)
})
