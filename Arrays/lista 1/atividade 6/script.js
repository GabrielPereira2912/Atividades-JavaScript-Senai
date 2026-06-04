let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro número"))
let n3 = Number(prompt("Digite outro número"))
let n4 = Number(prompt("Digite outro número"))
let n5 = Number(prompt("Digite outro número"))

let numeros = [n1,n2,n3,n4,n5]

let contador = 0

numeros.forEach(numero => {
    if (numero % 2 == 0){
        contador += 1
    }
});

alert(`Dos números digitados, ${contador} são pares`)