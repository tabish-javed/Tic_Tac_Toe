function openPlayerConfig () {
    playerConfigOverlayElement.style.display = "block"
    backdropElement.style.display = "block"
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none"
    backdropElement.style.display = "none"
}

// Handel form submission inside of browser instead of sending https request to server
function savePlayerConfig(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const enteredPlayerName = formData.get("playername")

    // for (const entry of formData.entries())
    //     console.log(entry)
}