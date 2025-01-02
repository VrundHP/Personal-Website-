const typingText = document.querySelector(".typing-text span");
const words = [
    "Software Developer",
    "Web Developer",
    "Machine Learning",
    "Artificial Intelligence",
    "Cloud Computing",
    "IT",
    "Data Science",
    "Database Management"

];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
        if (charIndex === currentWord.length) {
            isDeleting = true;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 150);
}
typeEffect();


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const homePage = document.getElementById("home-page");

    window.addEventListener("scroll", () => {
        // Check if the user scrolled past the home-page section
        if (window.scrollY > homePage.offsetHeight) {
            navbar.style.display = "flex"; // Show the navbar
        } else {
            navbar.style.display = "none"; // Hide the navbar
        }
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > homePage.offsetHeight) {
        navbar.classList.add("visible");
    } else {
        navbar.classList.remove("visible");
    }
});

