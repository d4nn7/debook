document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item-str');
    const navVib = document.querySelector('.nav-item-str-vib');

    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            navItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            const pageIndex = parseInt(this.dataset.page);
            const vibWidth = navVib.offsetWidth;
            const pageWidth = this.offsetWidth;
            const leftOffset = this.offsetLeft;

            const newLeft = leftOffset + (pageWidth - vibWidth) / 2;
            navVib.style.left = newLeft + 'px';

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});