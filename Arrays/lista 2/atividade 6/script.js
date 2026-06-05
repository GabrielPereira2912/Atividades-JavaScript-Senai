let numeros = []

for (i = 0; i < 5; i++){
    let num = Number(prompt("Digite um número"))
    numeros.push(num)
}

numeros.forEach((numero,indice) => {
    if (numero < 0){
        numeros[indice] = 0
    }
});

alert(numeros)