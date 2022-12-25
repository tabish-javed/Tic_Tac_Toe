function openPlayerConfig (event) {
    editedPlayer = Number(event.target.dataset.playerid)
    playerConfigOverlayElement.style.display = "block"
    backdropElement.style.display = "block"
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none"
    backdropElement.style.display = "none"
    formElement.firstElementChild.classList.remove("error")
    errorsOutputElement.textContent = ""
    formElement.firstElementChild.lastElementChild.value = ""
}

// Handel form submission inside of browser instead of sending https request to server
function savePlayerConfig(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const enteredPlayerName = formData.get("playername").trim()

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add("error")
        errorsOutputElement.textContent = "Please enter a valid name!"
        return
    }

    const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data")
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName

    players[editedPlayer - 1].name = enteredPlayerName

    closePlayerConfig()
}