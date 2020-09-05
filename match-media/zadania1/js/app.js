document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector(".header");

    function makeSticky() {
        if (window.scrollY > 100) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    const media = window.matchMedia("(min-width: 600px)");

    if (media.matches) {
        window.addEventListener("scroll", makeSticky);
    } else {
        window.removeEventListener("scroll", makeSticky);
    }

    media.addEventListener("change", e => {
        if (media.matches) {
            window.addEventListener("scroll", makeSticky);
        } else {
            window.removeEventListener("scroll", makeSticky);
            header.classList.remove("sticky");
        }
    })
});