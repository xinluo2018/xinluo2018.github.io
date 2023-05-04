function toggleMenu() {
    let navbar = document.getElementById("navbar-default");
    if (navbar.classList.contains("hidden")) {
        navbar.classList.remove("hidden");
    }
    else {
        navbar.classList.add("hidden");
    }
}
