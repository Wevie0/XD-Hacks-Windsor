function toggleNavbar() {
    const navLinkElement = document.querySelector(".nav-links");
    const navBurger = document.querySelector(".nav-burger");


    navLinkElement.classList.toggle("nav-links-active");
    navBurger.classList.toggle("nav-burger-active");
}
