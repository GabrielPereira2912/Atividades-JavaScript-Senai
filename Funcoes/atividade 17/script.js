function numerosAteN(num){
    let numeros = []
    for (i = 0; i < num; i++){
        numeros.push(i+1)
    }
    return numeros
}

alert(numerosAteN(10))