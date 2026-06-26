let frases = [
"Você consegue!",
"Nunca desista!",
"Continue estudando!",
"Seu esforço vale a pena!"
]

let bFrase = document.getElementById("bFrase")
let areafrases = document.getElementById("areafrases")

bFrase.addEventListener("click", function(){
    const frasealeatoria = frases[Math.floor(Math.random() * frases.length)];
    let frase = document.createElement("p")
    frase.textContent = frasealeatoria
    areafrases.appendChild(frase)
})