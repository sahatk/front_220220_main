"use strict";
// b_02_js_showHide.js
const jsArea = document.querySelector(".js_area");

// ===============================================================
// show, hide
(function () {
  const jsBtn01 = jsArea.querySelector(".btn_01");
  const Btn01Dt = jsBtn01.querySelector("dt");
  // const Btn01Dd = jsBtn01.querySelector('dd');
  const Btn01Dd = Btn01Dt.nextElementSibling; // Btn01Dt의 형제요소(다음요소)
  console.log(Btn01Dd);

  //event
  // Btn01Dt를 이벤트처리(클릭)시, Btn01Dd를 나타나게 만들기

  Btn01Dt.addEventListener("click", function (event) {
    //js는 addEventListener, jquery는 on('click,function(){});
    event.preventDefault();
    // Btn01Dd.css();
    const ddDisplay = window.getComputedStyle(Btn01Dd).display === "none"; //css 문서 값을 불러온다.

    if (ddDisplay) {
      Btn01Dd.style = "display:block";
    } else {
      Btn01Dd.removeAttribute("style");
      //Btn01Dd.style = 'display:none';
      //Btn01Dd.removeAttr('style');
    }
    // Btn01Dd.style ='display:block';
  });
})();

// ===============================================================
// fadeIn, fadeOut
(function () {
  // BtnDt를 이벤트발생(클릭)시, dd를 부드럽게 fade처리로 나타나게/사라지게 만들기

  // 변수 영역 ---------------------------------------
  const jsBtn = jsArea.querySelector(".btn_02");
  const BtnDt = jsBtn.querySelector("dt");
  const BtnDd = jsBtn.querySelector("dd");
  let opacityValue = 0;
  let timed = 100;
  let PERMISSION = true;
  let runnningInterval;

  // 함수 영역 ---------------------------------------

  // fnCheck() : 권한과 BtnDd의 display 상태 파악 
  const fnCheck = function(){
    PERMISSION = false;
    return window.getComputedStyle(BtnDd).display === "none";
  }

  // fnBlock() : display가 none이면 block으로 바꾸고 opacity 바꾸기
  const fnBlock = function(){
    BtnDd.style.display = "block";
    BtnDd.style.opacity = opacityValue / 100;
  }

  //fnFadeIn() : display가 none이면 BtnDd가 서서히 보이게
  const fnFadeIn = function(){
    runnningInterval = setInterval(function () {
      if (opacityValue < 100) {
        opacityValue += 1;
        BtnDd.style.opacity = opacityValue / 100;
      } else {
        clearInterval(runnningInterval);
        PERMISSION = true;
      }
    }, timed / 50);
  }

  //fnFadeOut() : display가 block이면 BtnDd가 서서히 사라지게
  const fnFadeOut = function(){
    runnningInterval = setInterval(function () {
      if (opacityValue > 0) {
        opacityValue -= 1;
        BtnDd.style.opacity = opacityValue / 100;
      } else {
        clearInterval(runnningInterval);
        opacityValue = 0;
        BtnDd.removeAttribute("style");
        PERMISSION = true;
      }
    }, timed / 50);
  }

   // fnClickEvent() : BtnDt 클릭시 이벤트 구현
   const fnClickEvent = function(event){
    event.preventDefault();
    if (PERMISSION) {
      PERMISSION = false;
      const DdDisplay = fnCheck();
      if (DdDisplay) {
        fnBlock();
        fnFadeIn();
      } else {
        fnFadeOut();
      }
    } // if(PERMISSION)
   }



  // 이벤트 영역 ------------------------------------
  BtnDt.addEventListener("click", fnClickEvent); //BtnDt.addEventListener('click');
})();

// ==============================================================
// slidedown, slideup
(function () {
  // 변수 영역 ---------------------------------------
  const jsBtn = jsArea.querySelector(".btn_03");
  const BtnDt = jsBtn.querySelector("dt");
  const BtnDd = jsBtn.querySelector("dd");
  // const ddFinalHeight = 200;
  let timed = 100;
  let PERMISSION = true;
  let ddHeight = 0;
  let runningInterval;

  // 함수 영역 ----------------------------------------------

  // fnCheck() : 권한 설정 및 BtnDd의 display상태 파악
  const fnCheck = function(){
    PERMISSION = false;
    return window.getComputedStyle(BtnDd).display === "none";
  }

  // fnBlockDd() : BtnDd 나타날경우에 기본 세팅
  const fnBlockDd = function() {
    BtnDd.style.display = "block";
    BtnDd.style.height = ddHeight;
    BtnDd.style.overflow = "hidden";
  };

  // fnSlideDown() : display:none일떄 slide 다운
  const fnSlideDown = function(){
    runningInterval = setInterval(() => {
      if (ddFinalHeight > ddHeight) {
        ddHeight += 1;
        BtnDd.style.height = ddHeight + "px";
      } else {
        ddHeight = ddFinalHeight;
        clearInterval(runningInterval);
        PERMISSION = true;
      }
    }, timed / 100);
  };

  // fnSlideUp() : display:block일때 slide 업
  const fnSlideUp = function(){
    runningInterval = setInterval(() => {
      if (ddHeight > 0) {
        ddHeight -= 1; // 높이 값을 변경
        BtnDd.style.height = ddHeight + "px"; //높이 값 데이터 교체
      } else {
        ddHeight = 0;
        BtnDd.removeAttribute("style");
        clearInterval(runningInterval);
        PERMISSION = true;
      }
    }, timed / 100);
  }

  // 선택자.outerHegiht(); -> jQuery에서 높이값 가져오기 기능 구현
  const fnGetHeight = function () {
    BtnDd.style.display = "block";
    const size = BtnDd.offsetHeight;
    BtnDd.removeAttribute("style");
    return size;
  };

  // fnClickEvent() : BtnDt 클릭시 이벤트 구현
  const fnClickEvent =function(event){
    event.preventDefault();
    if (PERMISSION) {
      const displayEl = fnCheck();
      if (displayEl) {
        fnBlockDd();
        fnSlideDown();
      } else {
        fnSlideUp();
      }
    } // if(PERMISSION)
  };

  // 추가 변수 ---------------------------------------------
  const ddFinalHeight = fnGetHeight();

  // 이벤트 수행
  // BtnDt를 이벤트발생(클릭)시, dd를 부드럽게 slide처리 나타나게/사라지게 만들기
  BtnDt.addEventListener("click", fnClickEvent); //BtnDt.addEventListener('click')
})();

// =================================================================

//html문서의 인라인속성값을 가져올때 사용
// console.log(Btn01Dd.style.display);

//★★★css문서에서 작성한 속성값을 가져올때 사용★★★
// console.log(window.getComputedStyle(Btn01Dd).display);

// const wrap =document.querySelector('#wrap');

// console.log(wrap.clientHeight); //border값 제외, margin값 제외
// console.log(wrap.offsetHeight); //border값 포함, margin값 제외
