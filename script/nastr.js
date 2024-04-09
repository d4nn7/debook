document.addEventListener("DOMContentLoaded", function() {
    const nastrTrigger = document.querySelectorAll('.nastr-trigger');
    const akciiPopup = document.querySelector('.akcii_filtr');

    nastrTrigger.forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            akciiPopup.style.display = (akciiPopup.style.display === 'block') ? 'none' : 'block'; // Переключаем видимость всплывающего окна
        });
    });

    window.addEventListener('click', function(e) {
        if (!akciirPopup.contains(e.target) && !nastrTrigger.contains(e.target)) {
            akciiPopup.style.display = 'none';
        }
    });
});