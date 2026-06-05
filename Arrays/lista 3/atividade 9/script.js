let numeros = []
let numerosP = []
let num
let soma = 0

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um numero"))
    numeros.push(num)
}

numeros.forEach(numero => {
    if (numero % 2 == 0){
        numerosP.push(numero)
    }
});

numerosP.forEach(numero => {
    soma += numero
});

alert(`A soma de somente dos números pares dentro do vetor é ${soma}`)