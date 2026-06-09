let numeros = []
let posicoes = []

for (let i = 0; i < 5; i++){
    num = Number(prompt("Digite um numero"))
    numeros.push(num)
}

numeros.sort((a, b) => a - b)

alert(numeros)

let posMaior = numeros[4]
let posMenor = numeros[0]

numeros[0] = posMaior
numeros[4] = posMenor

alert(numeros)
