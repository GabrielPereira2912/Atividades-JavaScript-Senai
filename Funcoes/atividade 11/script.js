function verIdade(idade){
    let maior = false
    if (idade >= 18){
        maior = true
    }
    return maior
}

alert(`maior de idade: ${verIdade(18)}`)