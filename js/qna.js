let currentIndex = 0; // 현재 질문 인덱스
let yesCount = 0; // '예'로 응답한 횟수
let answers = new Array(10).fill(false); // 각 질문에 대한 답변을 저장할 배열

// 숏폼 자가 진단 시작
function start() {
  document.querySelector(".qna-section").style.display = "block";
  showQuestion(currentIndex, nextQuestion); // 첫 번째 질문과 다음 질문을 위한 콜백 함수를 전달
}

// 질문 보여주기
function showQuestion(index, callback) {
  if (index < qnaList.length) {
    const question = qnaList[index];
    const qnaContainer = document.querySelector(".qna-section");
    qnaContainer.innerHTML = `<h1>${question.q}</h1>
                        <div class="wrapper">
                            <div class = "answer_container">
                              <div class = "answer_image">
                                  <img src="../image/yes.png" alt="yes" id="yesImage">
                              </div>
                              <div class = "answer_image">
                                  <img src="../image/no.png" alt="no" id="noImage">
                              </div>
                            </div>
                        </div>`;
    document.getElementById("yesImage").addEventListener("click", function () {
      selectAnswer(true, index, callback);
      yesCount++;
    });
    document.getElementById("noImage").addEventListener("click", function () {
      selectAnswer(false, index, callback);
    });
  } else {
    showResults(); // 모든 질문이 완료되면 결과를 보여줌
  }
}

// 답변 처리(선택 답변, 질문 번호, 다음 질문을 호출할 콜백 함수)
function selectAnswer(answer, index, callback) {
  answers[index] = answer;
  callback(index + 1, callback);
}

// 다음 질문을 처리하는 콜백 함수
function nextQuestion(index) {
  showQuestion(index, nextQuestion);
}

// 결과 보여주기
function showResults() {
  const qnaContainer = document.querySelector(".qna-section");
  qnaContainer.innerHTML = `<h2>결과:</h2>
                            <p>예로 답한 횟수: ${yesCount}번</p>
                            <p>${getResultMessage(yesCount)}</p>`;
}

// 결과 메시지 생성
function getResultMessage(yesCount) {
  if (yesCount <= 3) {
    return "뇌 깨끗";
  } else if (yesCount <= 7) {
    return "주의!";
  } else {
    return "뇌녹사";
  }
}
