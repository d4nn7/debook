window.onload = function() {
    const thumbnails = document.querySelectorAll('.card_info_img_3 img');
    const mainImage = document.querySelector('.card_info_img_osn img');
    let mainSrc = mainImage.getAttribute('src');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const newMainSrc = this.getAttribute('src');

            mainImage.setAttribute('src', newMainSrc);
            this.setAttribute('src', mainSrc);
            mainSrc = newMainSrc;
        });
    });
};