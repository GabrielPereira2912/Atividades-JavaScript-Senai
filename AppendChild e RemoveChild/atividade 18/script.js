const comentarios = document.getElementById("comentarios")
const comentarioInput = document.getElementById("comentario")
const button = document.getElementById("button")

button.addEventListener("click", function(){
    let comentario = document.createElement("p")
    comentario.textContent = comentarioInput.value
    comentarios.appendChild(comentario)
})