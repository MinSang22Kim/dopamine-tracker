let goodCnt = 0;
let badCnt = 0;

// result 버튼 클릭 이벤트
function result() {
    $(".control-section").hide();
    $("#real_brain_image").hide();
    if (goodCnt < badCnt) {
        $(".bad_result").show();
    } else {
        $(".good_result").show();
    }
}

function goBack() {
    window.location.href = "../pages/control.html"
}

$(".goodImage").click(function () {
    goodCnt++;
    $("button").css("background-color", "blue");
    // 0.1초 후에 원래 색상으로 되돌리기
    setTimeout(function() {
        $("button").css("background-color", "");
    }, 700);
});

$(".badImage").click(function () {
    badCnt++;
    $("button").css("background-color", "red");
    // 0.1초 후에 원래 색상으로 되돌리기
    setTimeout(function() {
        $("button").css("background-color", "");
    }, 700);
});