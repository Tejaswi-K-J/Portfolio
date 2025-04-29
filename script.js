document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");
    
    document.querySelectorAll(".social-btn").forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.2)";
        });
        button.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const words = ["Developer", "Designer", "Tech Enthusiast", "Problem Solver"];
    let index = 0;
    const textElement = document.getElementById("changing-text");

    function changeText() {
        textElement.style.opacity = 0; // Fade out
        setTimeout(() => {
            index = (index + 1) % words.length;
            textElement.textContent = words[index];
            textElement.style.opacity = 1; // Fade in
        }, 300); // Wait for fade-out effect
    }

    setInterval(changeText, 2000); // Change text every 2 seconds
});
