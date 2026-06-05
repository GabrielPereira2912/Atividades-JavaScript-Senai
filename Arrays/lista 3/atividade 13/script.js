let numeros = []
let numerosPP = []
let soma = 0

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um numero"))
    numeros.push(num)
}

numeros.forEach((numero,i) => {
    if (i % 2 == 0){
        numerosPP.push(numero)
    }
});

numerosPP.forEach(numero => {
    soma += numero
});

alert(soma)