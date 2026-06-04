let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro número"))
let n3 = Number(prompt("Digite outro número"))
let n4 = Number(prompt("Digite outro número"))
let n5 = Number(prompt("Digite outro número"))

let numeros = [n1,n2,n3,n4,n5]

let soma = 0

numeros.forEach(numero => {
    soma += numero
});

let media = soma/numeros.length

alert(`A média entre os números é de ${media}`)
