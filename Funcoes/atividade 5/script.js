function verPar(){
    let par = false
    let num = Number(prompt("Digite um número"))
    if (num % 2 == 0){
        par = true
    }
    return par

}

alert(`Par: ${verPar()}`)