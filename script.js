document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("themeToggle");
    const body = document.body;

    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme") || "dark";
    body.classList.remove("light-mode", "dark-mode");
    body.classList.add(`${savedTheme}-mode`);
    updateButtonText(savedTheme);

    button.addEventListener("click", () => {
        const isDark = body.classList.contains("dark-mode");
        body.classList.toggle("dark-mode", !isDark);
        body.classList.toggle("light-mode", isDark);

        const newTheme = isDark ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        updateButtonText(newTheme);
    });

    function updateButtonText(theme) {
        button.textContent = theme === "dark" ? "Toggle Light Mode" : "Toggle Dark Mode";
    }
});
// Smooth Scroll for navbar links
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        // Scroll to the section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Highlight the active section link
window.addEventListener('scroll', () => {
    let current = "";
    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute("id");
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
        }
    });
});

