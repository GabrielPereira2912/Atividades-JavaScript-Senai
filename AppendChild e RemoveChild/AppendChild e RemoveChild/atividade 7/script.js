function cadastrarAluno(){

let input = document.getElementById("nomeAluno")
let nome = input.value
let aluno = document.createElement("li")
aluno.textContent = nome
let alunos = document.getElementById("alunos")
alunos.appendChild(aluno)

}

function excluir(){

    let alunos = document.getElementById("alunos")
    alunos.removeChild(alunos.lastElementChild)
    
}