// Responsive Navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation")


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// Responsive Slider
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".picture-slide");

let currentSlide = 0;

const nextSlide = () => {
    slides[currentSlide].classList.remove("active");
    btns[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
    btns[currentSlide].classList.add("active");
};

const prevSlide = () => {
    slides[currentSlide].classList.remove("active");
    btns[currentSlide].classList.remove("active");

    currentSlide = (currentSlide - 1 + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    btns[currentSlide].classList.add("active");
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        slides[currentSlide].classList.remove("active");
        btns[currentSlide].classList.remove("active");

        currentSlide = i;

        slides[currentSlide].classList.add("active");
        btns[currentSlide].classList.add("active");
    });
});

// Automatic slide change every 5 seconds
setInterval(nextSlide, 5000);
