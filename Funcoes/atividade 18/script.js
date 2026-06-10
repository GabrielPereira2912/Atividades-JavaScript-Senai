function somarAteN(n){
    let numeros = []
    let soma = 0
    for (i = 0; i < n; i++){
        numeros.push(i+1)
    }

    numeros.forEach(numero => {
        soma += numero
    });

    return soma
}

alert(somarAteN(2))