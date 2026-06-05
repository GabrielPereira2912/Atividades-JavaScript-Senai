let numeros = []
let emOrdem = true

for (i = 0; i < 5; i++){
    let num = Number(prompt("Digite um número"))
    numeros.push(num)
}

numeros.forEach((numero,indice) => {
    if (numeros[indice] > numeros[indice + 1]){
        emOrdem = false
    }
    
});

if (!emOrdem){
    alert("Os números não estão em ordem crescente")
}

else{
    alert("Os números estão em ordem crescente")
}