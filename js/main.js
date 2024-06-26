//상단바 메뉴 슬라이드
function slideMenuBtn() {
    document.getElementById(".select_bar_btn").onclick = () => $(".select_bar_menu").css({
        'display': 'flex',
        'text-align': 'center',
        'align-items': 'center',
        '-ms-transition-duration': '2s',
        '-webkit-transition-duration': '2s',
        '-moz-transition-duration': '2s',
        '-o-transition-duration': '2s',
        'transition-duration': '2s'
    });
}

//메인1 사진 슬라이드
$(document).ready(function () {
    var current = 0;
    var setIntervalId;

    // 디폴트인 이미지 1의 버튼에 클래스 지정
    $(".btn li").eq(0).addClass("on");

    timer();

    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1; // 0,1,2
            // 이미지 3 (i=2) 이후에 흰 화면이 아니라 이미지 1로 돌아가도록 설정
            if (n == 3) {
                n = 0;
            }
            move(n);
        }, 3000);
    }

    function move(i) {
        var currentEl = $(".list li").eq(current); //current는 계속 변화하는 값이다
        var nextEl = $(".list li").eq(i);

        //애니메이션 지정(움직이는 액션)
        currentEl.css({ left: "0%" }).animate({ left: "-100%" });
        nextEl.css({ left: "100%" }).animate({ left: "0%" });
        current = i;
        //현재화면에 보이는 요소 인덱스값 current
        //다음에 화면에 보이는 요소 인덱스값이 i
        //애니메이션이 동작하고 나면 현재 current에는 i값을 대입해서
        //다음애니메이션이 될때는 i가 current가 됨

        //버튼에 클래스 지정
        $(".btn li").removeClass("on");
        $(".btn li").eq(i).addClass("on");
    }

    // 이미지에 커서를 올릴 시, 배너 애니메이션 멈춤
    // 커서를 치울 시, 애니메이션 재개
    $("#mainimg").on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        },
    });

    // 버튼 클릭 시에도 이미지 애니메이션 실행
    $(".btn li").click(function (e) {
        e.preventDefault();
        var i = $(this).index();
        move(i);
    });
});

//메인2 grid 카드
document.addEventListener("DOMContentLoaded", function () {
    const gradientBox = document.getElementById("gradientBox");

    if (gradientBox) {
        gradientBox.addEventListener("mouseover", function () {
            document.body.style.background = "linear-gradient(to bottom, rgba(0, 255, 204, 0.507), rgb(65, 65, 65)";
        });

        gradientBox.addEventListener("mouseout", function () {
            document.body.style.background = "linear-gradient(to bottom, rgba(0, 255, 204, 0.507), rgb(65, 65, 65)";
        });
    }
});

// 유튜브로 이동(임시)
function goYoutube() {
    window.location.href = "https://www.youtube.com/watch?v=3PEMocYpBks"
}

// 깃허브로 이동
function goGithub() {
    window.location.href = "https://github.com/MinSang22Kim/dopamine-tracker"
}