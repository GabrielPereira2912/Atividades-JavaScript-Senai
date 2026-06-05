let numeros1 = []
let numeros2 = []
let numeros3 = []
let num = 0
let soma = 0

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um número para a lista 1"))
    numeros1.push(num)
}

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um número para a lista 2"))
    numeros2.push(num)
}

numeros1.forEach((numero, indice) => {
    soma = numeros1[indice] + numeros2[indice]
    numeros3.push(soma)
});

alert(numeros3)