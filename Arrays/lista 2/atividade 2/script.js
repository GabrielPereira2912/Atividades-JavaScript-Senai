let numeros = []

for (i = 0; i < 5; i++){
    let num = Number(prompt("Digite um número"))
    numeros.push(num)
}

let verificar = Number(prompt("Digite um número pra verificar se existe na lista"))
let encontrado = false

numeros.forEach(numero => {
    if (numero == verificar){
        alert(`O número ${numero} se encontra na lista!`)
        encontrado = true
    }
});

if (encontrado == false){
    alert(`O número ${verificar} não está presente na lista`)
}