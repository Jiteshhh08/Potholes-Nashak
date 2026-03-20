// Scroll animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.25
});

cards.forEach(card => {
    observer.observe(card);
});
function scrollToSection(id) {
    const element = document.getElementById(id);

    element.scrollIntoView({
        behavior: "smooth"
    });
}
