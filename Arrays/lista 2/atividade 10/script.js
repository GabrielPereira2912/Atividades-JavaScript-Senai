let numeros1 = []
let numeros2 = []
let numeros3 = []
let num

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um número para a lista 1"))
    numeros1.push(num)
}

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um número para a lista 2"))
    numeros2.push(num)
}

numeros1.forEach((numero,indice) => {
    numeros3.push(numeros1[indice])
    numeros3.push(numeros2[indice])
});

alert(numeros3)