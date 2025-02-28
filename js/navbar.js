let sections = document.querySelectorAll('main > div'); 
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let top = window.scrollY;

    sections.forEach(section => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (id && top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

const collBtn = document.getElementById("collapse");
const navbar = document.getElementById("navbar");

function toggleNavbar() {
    navbar.classList.toggle("toggled");
    collBtn.classList.toggle("toggled");
}

collBtn.addEventListener("click", () => toggleNavbar());


