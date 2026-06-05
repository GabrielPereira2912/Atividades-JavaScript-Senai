let numeros = []
let numeros_mult = []
let num_mult

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um número"))
    numeros.push(num)
}

let mult = Number(prompt("Por favor, digite um número para multiplicar todos os números"))

numeros.forEach(numero => {
    num_mult = numero * mult
    numeros_mult.push(num_mult)
});

alert(numeros_mult)