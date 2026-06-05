let numeros = []
let numerosQuad = []
let quadrado

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um número"))
    numeros.push(num)
}

numeros.forEach(numero => {
    quadrado = numero * numero
    numerosQuad.push(quadrado)
});

alert(numeros)
alert(numerosQuad)