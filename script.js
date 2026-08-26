/* ==========================================
   MUHAMMAD SADIQ PORTFOLIO
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

}


/* ==========================================
   CLOSE MOBILE MENU
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("open");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );
        }

    });

});


/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }


    function updateThemeButton() {

        if (document.body.classList.contains("light-mode")) {

            themeToggle.innerHTML =
                '<span class="icon">☀</span> Light Mode';

        } else {

            themeToggle.innerHTML =
                '<span class="icon">◐</span> Dark Mode';

        }

    }


    updateThemeButton();


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLight =
            document.body.classList.contains("light-mode");

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

        updateThemeButton();

    });

}


/* ==========================================
   TYPING EFFECT
========================================== */

const typingText =
    document.getElementById("typing-text");


const typingWords = [
    "Python Developer in Progress",
    "Web Developer in Progress",
    "Future Software Engineer",
    "Future AI Engineer",
    "Builder & Learner"
];


let wordIndex = 0;
let letterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) return;

    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                letterIndex + 1
            );

        letterIndex++;


        if (
            letterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                letterIndex - 1
            );

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                typingWords.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 55 : 90
    );

}


typeEffect();


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll("section[id]");


const navigationLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop =
    document.querySelector(".back-to-top");


if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "visible"
            );

        } else {

            backToTop.classList.remove(
                "visible"
            );

        }

    });


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetId =
                link.getAttribute("href");


            if (
                targetId === "#" ||
                !targetId
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }
    );

});


/* ==========================================
   PROJECT IMAGE FALLBACK
========================================== */

document.querySelectorAll(
    ".project-preview img"
).forEach(image => {

    image.addEventListener(
        "error",
        () => {

            image.style.display =
                "none";


            image.parentElement.classList.add(
                "preview-error"
            );

        }
    );

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .card, .project, .learning-card, .timeline-item"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal-element"
    );

    revealObserver.observe(
        element
    );

});


/* ==========================================
   PAGE LOAD
========================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
    "MUHAMMAD SADIQ Portfolio loaded successfully."
); 