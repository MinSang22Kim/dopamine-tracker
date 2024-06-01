let goodCnt = 0;
let badCnt = 0;

// result 버튼 클릭 이벤트
function result() {
    $(".control-section").hide();
    if(goodCnt < badCnt){
        $(".bad_result").show();
    } else {
        $(".good_result").show();
    }
}

function goBack() {
    window.location.href = "../pages/control.html"
}

// 뇌 색 채우기
function updateBrain() {
    let x_progress = 0;
    let y_progress = 0;

    $(".goodImage").click(function() {
        if (x_progress >= 0 && y_progress <= 9) {
            x_progress += 50;
            y_progress -= 1;
            updatePosition();
        }
    });

    $(".badImage").click(function() {
        if (x_progress <= 500 && y_progress >= 0) {
            x_progress -= 50;
            y_progress += 1;
            updatePosition();
        }
    });

    function updatePosition() {
        $("#main_brain").css("background-position", `${y_progress}rem ${y_progress}rem`);
    }
}
