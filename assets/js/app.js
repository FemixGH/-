document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector(".header").classList.toggle("open")
    })
})


// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // Действие при клике
        document.querySelector(".header").classList.remove("open")
    }
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    // Действие при клике
    document.querySelector(".header").classList.remove("open")
});


let intervalId;

const handleImageChange = (offset) => {
    const activeSlide = document.querySelector("[data-active]");
    const slides = [...document.querySelectorAll(".slide")];
    const currentIndex = slides.indexOf(activeSlide);
    let newIndex = currentIndex + offset;

    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    slides[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
};

const onNext = () => {
    handleImageChange(1);
    resetInterval();
};

const onPrev = () => {
    handleImageChange(-1);
    resetInterval();
};

const startInterval = () => {
    intervalId = setInterval(onNext, 10000); // 10000 миллисекунд = 10 секунд
};

const resetInterval = () => {
    clearInterval(intervalId);
    startInterval();
};

startInterval(); // запускаем автоматическое переключение при загрузке страницы
