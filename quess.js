function runJs() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById("btnGuess").addEventListener("click", () => {
        const guess = Number(document.getElementById("txtGuess").value);
        
        if (randomNumber > guess) {
            document.getElementById("response").innerHTML = "You guessed lower. Try again."
        } else if (randomNumber < guess) {
            document.getElementById("response").innerHTML = "You guessed higher. Try again."
        } else {
            document.getElementById("response").innerHTML = "You guessed correct!"
        }
    });
}