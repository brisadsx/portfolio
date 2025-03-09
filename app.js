
document.addEventListener("DOMContentLoaded", function () {

    console.log("Preloader:", document.getElementById("preloader"));
    console.log("Content:", document.querySelector(".content"));

    const images = document.querySelectorAll(".icon");
    const loadingText = document.querySelector(".loading-text");
    const preloader = document.getElementById("preloader");
    const content = document.querySelector(".content");
    let index = 0;
    let percentage = 0;

    function updatePreloader() {
        percentage += 1;
        loadingText.textContent = percentage + "%";

        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });

        if (percentage % 17 === 0) {
            index = (index + 1) % images.length;
        }

        if (percentage < 100) {
            setTimeout(updatePreloader, 40);
        } else {
            setTimeout(() => {
                preloader.classList.add("hidden");

            }, 500);
        }
    }
    updatePreloader();
});


document.addEventListener("DOMContentLoaded", () => {
    const parallaxElements = document.querySelectorAll(".parallax");

    document.addEventListener("mousemove", (e) => {
        let x = (e.clientX / window.innerWidth - 0.5) * 10;
        let y = (e.clientY / window.innerHeight - 0.5) * 10;
        
        parallaxElements.forEach((el) => {
            let speed = el.getAttribute("data-speed");
            el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
});
