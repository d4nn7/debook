document.addEventListener("DOMContentLoaded", function() {
    const cartTrigger = document.querySelectorAll('.cart-trigger');
    const cartPopup = document.querySelector('.cart-popup');
    const mmTrigger = document.querySelectorAll('.mm-trigger');
    const mmPopup = document.querySelector('.mm-popup');

    function togglePopup(popup) {
        popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
    }

    cartTrigger.forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            togglePopup(cartPopup);
        });
    });

    mmTrigger.forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            togglePopup(mmPopup);
        });
    });

    window.addEventListener('click', function(e) {
        if (!Array.from(cartTrigger).some(elem => elem.contains(e.target))) {
            cartPopup.style.display = 'none';
        }
        if (!Array.from(mmTrigger).some(elem => elem.contains(e.target))) {
            mmPopup.style.display = 'none';
        }
    });
});