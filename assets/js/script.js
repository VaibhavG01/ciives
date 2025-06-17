


const slider = document.getElementById('slider');
const slides = slider.children;
const totalSlides = slides.length;
let currentIndex = 0;

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function showSlide(index) {
    const offset = -index * 100;
    gsap.to(slider, {
        xPercent: offset,
        duration: 1,
        ease: "power3.out"
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
});

// Optional Auto Slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 5000);



function scrollSlider(direction) {
    const slider = document.getElementById("servicesSlider");
    const scrollAmount = 220;
    slider.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}


