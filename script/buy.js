document.querySelector('.card_info_button').addEventListener('click', function(event) {
    event.preventDefault();

    const productName = document.querySelector('.card_info_name').textContent;
    const productAuthor = document.querySelector('.card_info_avt_a').textContent;
    const productCena = document.querySelector('.card_info_cena').textContent;
    const productImgSrc = document.querySelector('.card_info_img_osn img').src;

    const cartName = document.querySelector('.cart_nazvan');
    const cartAuthor = document.querySelector('.cart_avtor');
    const cartPrice = document.querySelector('.cart_cena');
    const cartImage = document.querySelector('.cart_img img');

    cartName.textContent = productName;
    cartAuthor.textContent = productAuthor;
    cartPrice.textContent = productCena;
    cartImage.src = productImgSrc;

    document.querySelector('.cart_wr').style.display = 'flex';
    
    document.querySelector('.cart_opl_but').style.display = 'block';
});

document.querySelector('.cart_chbx input').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.querySelector('.cart_opl_but').addEventListener('click', function() {

});