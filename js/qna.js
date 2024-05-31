let currentIndex = 0; // 현재 질문 인덱스
let yesCount = 0; // '예'로 응답한 횟수
let answers = new Array(10).fill(false); // 각 질문에 대한 답변을 저장할 배열

// 숏폼 자가 진단 시작
function start() {
  $(".popcorn_brain, #initPage").hide();
  $("#quizes").show();
  showQuestion(currentIndex, nextQuestion); // 첫 번째 질문과 다음 질문을 위한 콜백 함수를 전달
}

// 질문 표시
function showQuestion(index, callback) {
  if (index < qnaList.length) {
    document.querySelector(".qna-section h1 ").textContent = qnaList[index].q;
    document.getElementById("yesImage").onclick = () =>
      selectAnswer(true, index, callback);
    document.getElementById("noImage").onclick = () =>
      selectAnswer(false, index, callback);
  } else {
    showResults(yesCount);
  }
  updateStatusBar(index);
}

// 답변 처리(선택 답변, 질문 번호, 콜백 함수)
function selectAnswer(answer, index, callback) {
  answers[index] = answer;
  if (answer) {
    yesCount++;
  }
  callback(index + 1, callback);
}

// 다음 질문
function nextQuestion(index) {
  showQuestion(index, nextQuestion);
}

// 상태바 업데이트
function updateStatusBar(index) {
  const statusBar = document.querySelector(".status_bar");
  const progress = ((index + 1) / qnaList.length) * 100;
  statusBar.style.width = `${progress}%`;
}

// 결과 화면
function showResults(yesCount) {
  $("#quizes, #qna_main>h1").hide();
  $("#dopamine_result").show();
  getResultMessage(yesCount);
  if (yesCount >= 7) {
    qnaContainer.appendChild(detoxBtn);
  }
}

// 결과 메시지 반환
function getResultMessage(yesCount) {
  if (yesCount <= 3) {
    $("#yes_small").show();
  } else if (yesCount <= 7) {
    $("#yes_middle").show();
  } else {
    $("#yes_big").show();
  }
}

// shareImage 클릭 이벤트 처리
function copyLink(val) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.body.removeChild(t);
}

$('#shareImage').click(function () {
  copyLink('http://192.168.68.102:5500/pages/qna.html');
  alert("링크가 클립보드에 복사되었습니다.");
});

// 도파민-디톡스 하러가기
function goDetox() {
  window.location.href = "../pages/detox.html";
}