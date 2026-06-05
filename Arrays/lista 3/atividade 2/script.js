let numeros = []
let impares = []

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um número para a lista 1"))
    numeros.push(num)
}

numeros.forEach(numero => {
    if(numero % 2 != 0){
        impares.push(numero)
    }
});

alert(impares)