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

function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

document.querySelectorAll(".nav-li-element").forEach(element => 
    element.addEventListener("click", async () => {
        await delay(2000)
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
    }));