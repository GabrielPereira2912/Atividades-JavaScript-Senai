let numeros = []

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um número para a lista 1"))
    numeros.push(num)
}

let menor = Math.min(...numeros)

alert(`O menor número digitado foi ${menor}`)