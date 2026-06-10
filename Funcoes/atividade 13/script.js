function paresAteN(n){
    
    let numeros = []
    let numerosPares = []

    for (i = 0; i <= n; i++){
        numeros.push(i+1)
    }

    numeros.forEach(numero => {
        if (numero % 2 == 0){
            numerosPares.push(numero)
        }
    });

    return numerosPares

}

alert(paresAteN(10))