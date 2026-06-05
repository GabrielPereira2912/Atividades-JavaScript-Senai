let numeros = []
let maior

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um numero"))
    numeros.push(num)
}

let numsOrdem = numeros.sort()

let maior2 = numsOrdem[3]

alert(`O segundo maior número no array é ${maior2}`)
