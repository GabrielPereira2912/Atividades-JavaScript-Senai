let numeros = []
let posicoes = []

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um numero"))
    numeros.push(num)
}

let maior = Math.max(...numeros)
let menor = Math.min(...numeros)

let posMaior
let posMenor

numeros.forEach((numero,i) => {
    if (numero == maior){
        posMaior = i
        posicoes.push(posMaior)
    }

    else if (numero == menor){
        posMenor = i
        posicoes.push(posMenor)
    }
});

let temp = posMaior
posMaior = posMenor
posMenor = temp

alert(posicoes)
