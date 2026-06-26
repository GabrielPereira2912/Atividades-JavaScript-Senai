let tarefas = document.getElementById("tarefas")
let button1 = document.getElementById("addTarefa")
let button2 = document.getElementById("remTarefa")
let input = document.getElementById("tarefa")

button1.addEventListener("click", function (){
    let tarefa = document.createElement("li")
    tarefa.textContent = input.value
    tarefas.appendChild(tarefa)
})

button2.addEventListener("click", function (){
    tarefas.removeChild(tarefas.lastElementChild)
})