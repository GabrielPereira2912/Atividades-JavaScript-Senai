let emojis = document.getElementById("emojis")
let buttonEmoji = document.getElementById("buttonEmoji")

buttonEmoji.addEventListener("click", function() {
    let emoji = document.createElement("span")
    emoji.textContent = "😊"
    emojis.appendChild(emoji)
})