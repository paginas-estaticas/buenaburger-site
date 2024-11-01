const wrapMenuItems = document.getElementsByClassName("wrap-menu-item");
const wrapMenuArray = Array.from(wrapMenuItems)
const menus = document.getElementsByClassName("menu-section")
const menusArray = Array.from(menus)


function hideNotSelectedMenus(item) {
    menusArray.forEach(element => {
        element.classList.add("menu-section-hidden");
    });

    const indexOfItem = wrapMenuArray.indexOf(item);
    menusArray[indexOfItem].classList.remove("menu-section-hidden");
};

function showSelectedMenu(item) {
    wrapMenuArray.forEach(element => {
        element.classList.remove("selected-wrap-menu-item");
        hideNotSelectedMenus(item);
    });
    item.classList.add("selected-wrap-menu-item")
};

wrapMenuArray.forEach(element => {
    element.addEventListener("click", () => showSelectedMenu(element))
});