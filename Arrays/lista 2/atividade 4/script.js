let numeros1 = []
let numeros2 = []

for (i = 0; i < 5; i++){
    let num = Number(prompt("Digite um número"))
    numeros1.push(num)
}

numeros1.forEach((numero,indice) => {
    if (numero % 2 == 0){
        numeros2.push(numeros1[indice])
    }
});

alert(`O array com apenas números pares fica assim: ${numeros2}`)