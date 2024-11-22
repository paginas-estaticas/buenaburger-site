const hamburgerMenu = document.getElementById("hamburguer-menu-icon");
const navMenu = document.getElementById("header-nav");

hamburgerMenu.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains("activte")) {
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    } 
});

document.querySelectorAll(".nav-li-element").forEach(element => 
    element.addEventListener("click", () => {
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
    }));