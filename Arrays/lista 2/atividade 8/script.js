let soma = 0
let numeros = []
let numeros_acima = []

for (i = 0; i < 5; i++){
    let num = Number(prompt("Digite um número"))
    numeros.push(num)
}

numeros.forEach((numero,indice) => {
    soma += numero
});

let media = soma / numeros.length()

numeros.forEach(numero => {
    if (numero > media){
        numeros_acima.push(numero)
    }
});

alert(numeros_acima)
