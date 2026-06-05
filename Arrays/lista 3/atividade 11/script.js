let numeros = []

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um numero"))
    numeros.push(num)
}

let ultimo_elemento = numeros[4]

numeros.pop(numeros[4])
numeros.unshift(ultimo_elemento)

alert(numeros)