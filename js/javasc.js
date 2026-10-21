const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

function setTheme(theme) {
    document.body.dataset.theme = theme;
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.textContent = `${nextTheme[0].toUpperCase()}${nextTheme.slice(1)} mode`;
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
}

setTheme(savedTheme || preferredTheme);

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
});
