let numeros = []

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um número para a lista 1"))
    numeros.push(num)
}

let menor = Math.min(...numeros)
let maior = Math.max(...numeros)

let diferenca = maior - menor

alert(`O maior número na lista é ${maior} e o menor é ${menor}. A diferença entre eles é ${diferenca}`)