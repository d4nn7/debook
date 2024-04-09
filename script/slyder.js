document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.sl_pr > img, .sl_vt, .sl_tr');
    const prevButton = document.querySelector('.sl_l > .sl_but');
    const nextButton = document.querySelector('.sl_r > .sl_but');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    showSlide(currentIndex);

    nextButton.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
    });

    prevButton.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    });

});