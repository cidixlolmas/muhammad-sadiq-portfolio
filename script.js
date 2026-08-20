// =====================================
// MUHAMMAD SADIQ PORTFOLIO
// =====================================

console.log("Welcome to Muhammad Sadiq's portfolio 🚀");


// =====================================
// SECTION SCROLL ANIMATION
// =====================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// =====================================
// MOBILE MENU
// =====================================

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

const navLinks = document.querySelectorAll(".nav-links a");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});


// Close menu after clicking a link

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

    });

});


// =====================================
// DARK / LIGHT MODE
// =====================================

const themeButton =
    document.querySelector("#theme-toggle");

const savedTheme =
    localStorage.getItem("theme");


// Load saved theme

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeButton.textContent =
        "🌙 Light Mode";

}


// Change theme

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if (
        document.body.classList.contains("light-mode")
    ) {

        themeButton.textContent =
            "🌙 Light Mode";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeButton.textContent =
            "☀️ Dark Mode";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


// =====================================
// BACK TO TOP BUTTON
// =====================================

const backToTop =
    document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

backToTop.setAttribute(
    "aria-label",
    "Back to top"
);

document.body.appendChild(backToTop);


// Show button after scrolling

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});


// Go to top

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});