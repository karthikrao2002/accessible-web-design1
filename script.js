document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded successfully!");

    let images = document.querySelectorAll(".grid-container img");
    images.forEach(img => {
        img.setAttribute("tabindex", "0");

        img.addEventListener("mouseover", function() {
            this.style.borderColor = "#0073e6";
        });

        img.addEventListener("mouseleave", function() {
            this.style.borderColor = "#ddd";
        });

        img.addEventListener("focus", function() {
            this.style.borderColor = "#ff5733";
        });

        img.addEventListener("blur", function() {
            this.style.borderColor = "#ddd";
        });
    });
});
