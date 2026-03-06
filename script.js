/* ===========================
NAVBAR ACTIVE LINK
=========================== */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


/* ===========================
SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

    });
});


/* ===========================
SCROLL ANIMATION
=========================== */

const revealElements = document.querySelectorAll(
".about-container, .project-card, .skill-box, .contact-container, .certificate-card"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);


/* ===========================
SKILL BAR ANIMATION
=========================== */

const skillBars = document.querySelectorAll(".skill-progress");

function animateSkills() {

    skillBars.forEach(skill => {

        const skillPosition = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (skillPosition < screenPosition) {
            const value = skill.getAttribute("data-skill");
            skill.style.width = value + "%";
        }

    });

}

window.addEventListener("scroll", animateSkills);


/* ===========================
PROJECT CARD HOVER EFFECT
=========================== */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";
        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


/* ===========================
CONTACT FORM MESSAGE
=========================== */

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function () {

        setTimeout(() => {

            alert("✅ Message sent successfully! I will get back to you soon.");

        }, 500);

    });

}


/* ===========================
MOBILE NAVBAR TOGGLE
=========================== */

const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";

const navbar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-links");

if (navbar && navMenu) {

    navbar.appendChild(menuToggle);

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}


/* ===========================
YEAR AUTO UPDATE
=========================== */

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML = `© ${year} Usha Rani Kannaji | DevOps & Cloud Engineer`;

}


/* ===========================
NAME HIGHLIGHT CLICK EFFECT
=========================== */

const nameElement = document.querySelector(".name-highlight");

if (nameElement) {

    nameElement.addEventListener("click", () => {

        nameElement.classList.add("clicked");

        setTimeout(() => {
            nameElement.classList.remove("clicked");
        }, 800);

    });

}


/* ===========================
CERTIFICATE CARD CLICK EFFECT
=========================== */

const certificateCards = document.querySelectorAll(".certificate-card");

certificateCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.add("clicked");

        setTimeout(() => {
            card.classList.remove("clicked");
        }, 800);

    });

});