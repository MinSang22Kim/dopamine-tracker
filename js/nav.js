//상단바 버튼
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.select_bar_btn');
    const menu = document.querySelector('.select_bar_menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});


//오디오
$(document).ready(function() {
    var audio = $("#audio")[0];

    $(".toggle-audio i").removeClass("fa-music").addClass("fa-pause");

    $(".toggle-audio").click(function() {
        if (audio.paused) {
            audio.play();
            $(this).find("i").removeClass("fa-music").addClass("fa-pause");
        } else {
            audio.pause();
            $(this).find("i").removeClass("fa-pause").addClass("fa-music");
        }
    });
});
