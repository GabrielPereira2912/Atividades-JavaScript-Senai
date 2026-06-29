const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const buttonAdd = document.getElementById("buttonAdd")
const buttonRem = document.getElementById("buttonRem")
const alfabeto = document.getElementById("alfabeto")
let indice = 0

buttonAdd.addEventListener("click", function(){
    let letra = document.createElement("p")
    letra.textContent = letras[indice]
    alfabeto.appendChild(letra)
    indice++
})

buttonRem.addEventListener("click", function(){
    alfabeto.removeChild(alfabeto.lastElementChild)
})