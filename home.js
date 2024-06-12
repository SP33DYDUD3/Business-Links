function toggleMenu(menuId) {
    var menuContent = document.getElementById(menuId);
    if (menuContent.classList.contains('show')) {
        menuContent.classList.remove('show');
    } else {
        menuContent.classList.add('show');
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-button') && !event.target.closest('.menu-content')) {
        closeAllMenus();
    }
}

function closeAllMenus() {
    var dropdowns = document.getElementsByClassName("menu-content");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show');
    }
}
