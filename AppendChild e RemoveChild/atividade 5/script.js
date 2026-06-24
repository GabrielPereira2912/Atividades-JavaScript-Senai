let listaCompras = document.getElementById("listaCompras")
let item = document.createElement("li")
item.innerText = "Tomate"

listaCompras.appendChild(item)

let buttonR = document.getElementById("buttonR")

function remover(){
    listaCompras.removeChild(listaCompras.lastElementChild)
}

buttonR.addEventListener("click", remover)