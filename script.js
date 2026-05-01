window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        loader.style.transition = "0.5s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1200);
});

const launchDate = new Date("May 30, 2026 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".coming").innerText = "We're Live!";
    }
}, 1000);