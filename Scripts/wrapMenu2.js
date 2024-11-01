const menus = document.getElementsByClassName("menu-section")
const menusArray = Array.from(menus)


function hideNotSelectedMenus() {
    menusArray.forEach(element => {
        element.classList.add("menu-item-hidden");
    });
};

hideNotSelectedMenus()