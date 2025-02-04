const collapseButton = document.getElementById("collapse-button");
const navbar = document.getElementById("navbar");

collapseButton.addEventListener("click", () => collapeToggle());

function collapeToggle() {
    navbar.classList.toggle("open");
    collapseButton.classList.toggle("active");
}