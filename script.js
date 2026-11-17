
// Mamta Hotel JavaScript

// Booking Button
function bookNow() {
    alert(
        "Welcome to Mamta Hotel!\n" +
        "Thank you for choosing us.\n" +
        "Please contact us to confirm your booking."
    );
}

// Welcome Message
window.addEventListener("load", function() {
    console.log("Welcome to Mamta Hotel Website!");
});

// Navigation Smooth Scrolling
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener("click", function(event) {
        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Menu Card Animation
const cards = document.querySelectorAll(".menu-card");

cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "translateY(0)";
    });
});
