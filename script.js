document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "<h2>¡VAMOSSSSSSSSSSSSSSSSSSSS! 🎉💖</h2> <img src='https://media1.tenor.com/m/O4s7f1BDhWAAAAAd/monkies-hugging-happy.gif' alt='Monkey feliz'>";
});

// Función para mover el botón "No" cuando el mouse pase sobre él
document.getElementById("noButton").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - this.clientWidth);
    let y = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.position = "absolute";
    this.style.left = x + "px";
    this.style.top = y + "px";
});

// Si logran hacer clic en "No", muestra el mensaje y la imagen
document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "<h2>😾 ¡QUE TONTA COMO QUE NO! 💔</h2> <img src='https://media1.tenor.com/m/WpmYcNkPWBYAAAAC/fatuna-monkey.gif' alt='Monkey triste'>";
});

