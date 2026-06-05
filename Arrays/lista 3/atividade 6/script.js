let numeros = []
let num

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite um número"))
    numeros.push(num)
}

let maior = Math.max(... numeros)

numeros.forEach((numero,i) => {
    if (numero == maior){
        alert(`O maior número é ${maior} e se encontra na posição ${i}`)
    }
});