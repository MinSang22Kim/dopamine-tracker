//상단바 버튼
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.select_bar_btn');
    const menu = document.querySelector('.select_bar_menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});