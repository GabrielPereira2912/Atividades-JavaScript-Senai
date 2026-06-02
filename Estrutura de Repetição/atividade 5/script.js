let senha = 1234
let num
do{
    num = Number(prompt("Digite sua senha"))
    if( num!== senha){
        alert("Senha incorreta")
    }
}while (num !== senha)

alert("A senha está correta")

