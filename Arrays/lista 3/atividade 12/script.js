let numeros = []

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um numero"))
    numeros.push(num)
}

let primeiro_elemento = numeros[0]

numeros.shift(numeros[0])
numeros.push(primeiro_elemento)

alert(numeros)