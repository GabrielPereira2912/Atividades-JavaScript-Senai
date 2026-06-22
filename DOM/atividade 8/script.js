function trocar_cor(){
    let quadrado = document.getElementById("quadrado")
    let circulo = document.getElementById("circulo")

    quadrado.style.backgroundColor = "red"
    circulo.style.backgroundColor = "blue"
}

function destrocar_cor(){
    let quadrado = document.getElementById("quadrado")
    let circulo = document.getElementById("circulo")

    quadrado.style.backgroundColor = "blue"
    circulo.style.backgroundColor = "red"
}