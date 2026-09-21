const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

// Menü auf dem Handy nach einem Klick wieder schließen
document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
    });
});

// Aktiven Navigationspunkt beim Scrollen markieren
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

window.addEventListener("scroll", () => {
    let current = "start";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
