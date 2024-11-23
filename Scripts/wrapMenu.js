const wrapMenuItems = document.getElementsByClassName("wrap-menu-item");
const wrapMenuArray = Array.from(wrapMenuItems);
const menus = document.getElementsByClassName("menu-section");
const menusArray = Array.from(menus);
const resetWrapMenuButton = document.getElementById("reset-wrap-menu");


function hideNotSelectedMenus(item) {
    menusArray.forEach(element => {
        if (!element.classList.contains("menu-section-hidden")) {
            element.classList.add("menu-section-hidden");
        }

        if (item !== "reset") {
            let indexOfItem = wrapMenuArray.indexOf(item);
            menusArray[indexOfItem].classList.remove("menu-section-hidden");
        } else {
            element.classList.remove("menu-section-hidden")
        }
    });
};

function selectWrapMenuItem(item) {
    wrapMenuArray.forEach(element => {
        element.classList.remove("selected-wrap-menu-item");
    })

    if (item !== "reset") {
        item.classList.add("selected-wrap-menu-item")
    }
};

function showResetWrapMenuButton() {
    resetWrapMenuButton.classList.add("active")
};

wrapMenuArray.forEach(element => {
    element.addEventListener("click", () => {
        selectWrapMenuItem(element);
        hideNotSelectedMenus(element);
        showResetWrapMenuButton();
    });
});

resetWrapMenuButton.addEventListener("click", () => {
    resetWrapMenu();
    resetWrapMenuButton.classList.remove("active");
})

function resetWrapMenu() {
    selectWrapMenuItem("reset");
    hideNotSelectedMenus("reset")
}