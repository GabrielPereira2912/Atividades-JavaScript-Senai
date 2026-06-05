let numeros = []

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um número"))
    numeros.push(num)
}

numeros.forEach((numero,i) => {
    if (numeros[i] == numeros[i+1] || numeros[i] == numeros[i+2] || numeros[i] == numeros[i+3] || numeros[i] == numeros[i+4]){
        alert (`O número ${numero} aparece mais de uma vez no vetor`)
    }
});