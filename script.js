// Dark Mode Toggle 
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change Images in Dark Mode
    const aboutImage = document.getElementById("aboutImage");
    const projectImage = document.getElementById("projectImage");
    const contactImage = document.getElementById("contactImage");

    if (document.body.classList.contains("dark-mode")) {
        aboutImage.src = "images/about-me-dark.jpg"; // Dark mode image for About
        projectImage.src = "images/projects-dark.jpg"; // Dark mode image for Projects
        contactImage.src = "images/contact-dark.jpg"; // Dark mode image for Contact
    } else {
        aboutImage.src = "images/about-me.jpg"; // Light mode image for About
        projectImage.src = "images/projects-light.jpg"; // Light mode image for Projects
        contactImage.src = "images/contact-light.jpg"; // Light mode image for Contact
    }
});

// Live Clock
function updateClock() {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Scroll to Contact Section
function scrollToContact() {
    document.getElementById("CONTACT").scrollIntoView({ behavior: "smooth" });
}

// Back to Top Button Visibility
window.addEventListener("scroll", () => {
    const backToTopButton = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Back to Top Smooth Scroll
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Fade In Effect on Navigation Click
document.querySelectorAll("nav a, .contact-button").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let targetSection = document.querySelector(link.getAttribute("href"));
        if (targetSection) {
            targetSection.classList.add("fade-section");
            setTimeout(() => {
                targetSection.classList.add("fade-in");
                targetSection.scrollIntoView({ behavior: "smooth" });

                setTimeout(() => {
                    targetSection.classList.remove("fade-section");
                }, 600); // Remove fade effect after animation
            }, 100);
        }
    });
});

// Form Submission Handling
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
    this.reset(); // Clear form after submission
});
