let tarefas = document.getElementById("tarefas")
let button = document.getElementById("addTarefa")
let input = document.getElementById("tarefa")

button.addEventListener("click", function (){
    let tarefa = document.createElement("li")
    tarefa.textContent = input.value
    tarefas.appendChild(tarefa)
})