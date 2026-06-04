let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro número"))
let n3 = Number(prompt("Digite outro número"))
let n4 = Number(prompt("Digite outro número"))
let n5 = Number(prompt("Digite outro número"))

let numeros = [n1,n2,n3,n4,n5]

numeros.forEach(numero => {
    if (numero >= n1 && numero >= n2 && numero >= n3 && numero >= n4 && numero >= n5){
        alert(`O número ${numero} é o maior dentre os digitados`)
    }
});