let numeros = []
let produto = 1

for (i = 0; i < 5; i++){
    let num = Number(prompt("Digite um número"))
    numeros.push(num)
}

numeros.forEach(numero => {
    produto *= numero
});

alert(`O produto de todos os valores do array é ${produto}`)