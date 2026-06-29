const mensagens = document.getElementById("mensagens")
const mensagemInput = document.getElementById("mensagem")
const buttonAdd = document.getElementById("buttonAdd")
const buttonRem = document.getElementById("buttonRem")

buttonAdd.addEventListener("click", function(){
    let mensagem = document.createElement("p")
    mensagem.textContent = mensagemInput.value
    mensagens.appendChild(mensagem)
})

buttonRem.addEventListener("click", function(){
    mensagens.removeChild(mensagens.lastElementChild)
})