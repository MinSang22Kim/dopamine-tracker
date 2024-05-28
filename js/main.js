const menuBtn = document.querySelector('.select_bar_btn');
const menu = document.querySelector('.select_bar_menu');
const user = document.querySelector('.select_bar_user');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    user.classList.toggle('active');
});