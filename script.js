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
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/* ===========================
   SCROLL ANIMATION
=========================== */

const revealElements = document.querySelectorAll(
".about-container, .project-card, .skill-box, .contact-container"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const elementTop = el.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }

    });
};

window.addEventListener("scroll", revealOnScroll);


/* ===========================
   SKILL BAR ANIMATION
=========================== */

const skillBars = document.querySelectorAll(".skill-progress");

function animateSkills() {

    skillBars.forEach(skill => {

        const value = skill.getAttribute("data-skill");

        skill.style.width = value + "%";

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

navbar.appendChild(menuToggle);

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* ===========================
   YEAR AUTO UPDATE
=========================== */

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML = `© ${year} Usha Rani Kannaji | DevOps & Cloud Engineer`;

}
const nameElement = document.querySelector('.name-highlight');

if (nameElement) {
    nameElement.addEventListener('click', () => {
        nameElement.classList.add('clicked');
        setTimeout(() => {
            nameElement.classList.remove('clicked'); // effect lasts 0.8s
        }, 800);
    });
}
// Name Highlight Click
const nameElement = document.querySelector(".name-highlight");

nameElement.addEventListener("click", () => {
    nameElement.classList.toggle("clicked");
});