let numeros = []

for (i = 0; i < 5; i++){
    let num = Number(prompt("Digite um número"))
    numeros.push(num)
}

let verificar = Number(prompt("Digite um número pra verificar quantas vezes ele aparece na lista"))
let contador = 0

numeros.forEach(numero => {
    if (numero == verificar){
        contador += 1
    }
});

alert(`O número ${verificar} aparece ${contador} vezes`)