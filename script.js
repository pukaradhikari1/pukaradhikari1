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
