// b_01_responsive_js.js

//1  .navi_btn 내부 button요소를 선택 시 -> 형제요소인 .navi_area를 .action의 add/remove 처리


const naviBtn = document.querySelector('.navi_btn');
const naviArea = document.querySelector('.navi_area');
const naviBtnSel = [].slice.call(naviBtn.children)[0]; 
//children은 유사배열이기에 배열기능을 사용 할 수 없다. -> 진짜 배열로 변환하여 사용
const naviBtnI = naviBtn.querySelector('i');
const ACTION_TEXT = 'action';
const BTNICON = ['fa-bars','fa-xmark'];

naviBtnSel.addEventListener('click', function(e){
    e.preventDefault();
    // naviArea.classList.add(ACTION_TEXT);
    const check = naviArea.classList.contains(ACTION_TEXT);
    if(!check){
        naviArea.classList.add(ACTION_TEXT);
        naviBtnI.classList.remove(BTNICON[0]);
        naviBtnI.classList.add(BTNICON[1]);
    }else{
        naviArea.classList.remove(ACTION_TEXT);
        naviBtnI.classList.remove(BTNICON[1]);
        naviBtnI.classList.add(BTNICON[0]);
    }
});

