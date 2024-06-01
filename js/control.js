let goodCnt = 0;
let badCnt = 0;

// Good 버튼을 클릭
document.querySelectorAll('.goodBtn').forEach(button => {
    button.addEventListener('click', () => {
        goodCnt++;
    });
});

// Bad 버튼을 클릭
document.querySelectorAll('.badBtn').forEach(button => {
    button.addEventListener('click', () => {
        badCnt++;
    });
});

function result() {
    $("all_container, #control_main>h1").hide();
    if(goodCnt < badCnt){
        $(".bad_result").show();
    } else {
        $(".good_result").show();
    }
}

// 뇌 색 채우기
function updateBrain(index) {
    const updateBar = document.querySelector("#main_brain");
    const progress = ((index+1)/10)*100;
    updateBar.computedStyleMap.height=`$(progress)%`; 
}