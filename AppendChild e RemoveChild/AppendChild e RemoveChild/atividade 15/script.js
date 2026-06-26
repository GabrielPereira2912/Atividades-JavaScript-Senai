let numeros = document.getElementById("numeros")
let button = document.getElementById("nNumero")
let contador = 0

button.addEventListener("click", function(){
    contador++
    let nNumero = document.createElement("span")
    nNumero.textContent = contador
    numeros.appendChild(nNumero)
})