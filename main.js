document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
});
