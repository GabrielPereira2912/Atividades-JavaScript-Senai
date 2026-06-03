let num

do{
    num = Number(prompt("Digite um número"))
    if(num < 0){
        alert("Por favor, digite um número positivo!")
    }
}while(num < 0)

alert("Número válido")