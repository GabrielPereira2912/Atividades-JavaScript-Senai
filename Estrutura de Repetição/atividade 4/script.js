let soma = 0
let num
do{

    num = Number(prompt("Digite um número"))

    soma += num

} while(num != 0)

alert(`O valor total da soma de todos os números é ${soma}`)
