let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro número"))
let n3 = Number(prompt("Digite outro número"))
let n4 = Number(prompt("Digite outro número"))
let n5 = Number(prompt("Digite outro número"))
let soma = 0

let numeros = [n1,n2,n3,n4,n5]

numeros.forEach(numero => {

    soma += numero
    
});

alert(`A soma de todos os números é ${soma}`)