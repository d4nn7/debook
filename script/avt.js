document.addEventListener("DOMContentLoaded", function() {
    const av_but_left = document.querySelector(".av_but_left");
    const av_but_right = document.querySelector(".av_but_right");

    // Список имен и изображений для смены
    const names = ["РЭЙ БРЭДБЕРИ", "Стивен КИНГ", "Кен КИЗИ", "Антон ЧЕХОВ"];
    const images = ["./img/svg/rbr.svg", "./img/svg/sk_f.svg", "./img/svg/kk_f.svg", "./img/svg/ac_f.svg"];

    av_but_left.addEventListener("click", function() {
        shiftArrayRight(names);
        shiftArrayRight(images);
        updateMainWriter(names[0], images[0]);
    });

    av_but_right.addEventListener("click", function() {
        shiftArrayLeft(names);
        shiftArrayLeft(images);
        updateMainWriter(names[0], images[0]);
    });

    function shiftArrayLeft(array) {
        const firstElement = array.shift();
        array.push(firstElement);
    }

    function shiftArrayRight(array) {
        const lastElement = array.pop();
        array.unshift(lastElement);
    }

    function updateMainWriter(name, imageSrc) {
        const rb_txt = document.querySelector(".rb_txt");
        const rb_crug_img = document.querySelector(".rb_crug img");
        rb_txt.textContent = name;
        rb_crug_img.src = imageSrc;
    }
});