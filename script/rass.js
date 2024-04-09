document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.querySelector('.ras_form');
    const button = document.querySelector('.but_ras');

    inputField.addEventListener('click', function() {
        button.classList.add('move-right');
    });

    document.addEventListener('click', function(event) {
        const clickedElement = event.target;
        if (!clickedElement.matches('.ras_form')) {
            if (inputField.value.trim() === '') {
                button.classList.remove('move-right'); 
            }
        }
    });

    const form = document.getElementById('subscription-form');
    form.addEventListener('submit', function(event) {
        if (inputField.value.trim() !== '') {
            button.classList.add('move-right');
        }
    });
});