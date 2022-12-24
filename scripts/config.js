function openPlayerConfig (event) {
    const selectedPlayerId = event.target.dataset.playerid
    editedPlayer = selectedPlayerId
    playerConfigOverlayElement.style.display = "block"
    backdropElement.style.display = "block"
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none"
    backdropElement.style.display = "none"
    formElement.firstElementChild.classList.remove("error")
    errorsOutputElement.textContent = ""
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
    // for (const entry of formData.entries())
    // console.log(entry)
}