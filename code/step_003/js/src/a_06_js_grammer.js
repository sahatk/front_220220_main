'use strict'; //오류를 엄격하게 체크해라.
// a_06_js_grammer.js

// 문법 : 조건문, 반복문
// - 조건문 : if(단수분기), switch(다수분기)
// - 반복문 : while(잘안쓰는거 : 실행 속도 느림), do-while(선행후 순환), for(자주사용,정석), forEach(주로 배열형식), for-in(객체순환)

let food = '피자';

if (food === '자장면') {
    console.log('중국집 전화번호 : 0000');
}else if (food === '피자') {
    console.log('피자집 전화번호 : 1111');
}else if (food === '갈비탕') {
    console.log('한식집 전화번호 : 2222');
}else {console.log('물만')}


let result;
switch(food){
    case '자장면' : result = '중국집 전화번호 : 0000'; break;
    case '피자'  : result = '피자집 전화번호 : 1111'; break;
    case '갈비탕'  : result = '한식집 전화번호 : 2222'; break;
    default : result = '물';
}
console.log(result);

result = '';
let bank = 0;
switch(bank){
    case 0 : result += '입금 수행하겠습니다.'; break;
    case 1 : result += '송금 수행하겠습니다.'; break;
    case 2 : result += '계좌 삭제하겠습니다.'; break;
    case 3 : result += '블랙리스트 등극'; break;
    default : result += '누구신지?';
}

console.log(result);

// ---------------------------------------------------------
console.clear(); // console 위에 꺼 다 지우기
let link = './content.html';
let linkText = 'js base';
// const h1 = document.getElementsByTagName('h1')[0];
const h1 = document.querySelector('h1'); //querySelector : 선택자를 정하세요.
// h1.innerHTML = '<a href="'+link+'">'+linkText+'</a>'; //innerHTML : 집어넣기
// h1.innerHTML = "<a href=\""+link+"\">"+linkText+"</a>"; 
h1.innerHTML = `<a href="${link}">${linkText}</a>`; //${} : 보관법

// -----------------------------------------------------------
// var areaEl = document.getAttribute('class', 'area');
// const areaEl = document.getElementsByClassName('area')[0];

// 시나리오 : li를 이벤트발생(클릭)했을때, 해당 순서에 의한 기능 수행
// 1. li는 복수형태이기때문에 여러개중의 하나를 클릭한다 라는 인식
// 
const areaEl = document.querySelector('.area'); //querySelector : 자손 선택자를 정하세요. 요즘 트렌드
const areaUlEl = areaEl.querySelector('ul');
const areaListEl = areaUlEl.querySelectorAll('li');
const relEl = areaEl.querySelector('.result');

// const wrapEl = document.getElementById('wrap');
 //addEventListener : 이벤트 추가하기
areaListEl.forEach(function(it, index){
    it.addEventListener('click', function(){ 
        let num = index; //들어온 index인자를 num에 집어넣는다.
        let product;
        switch(num){
            case 0: product='아이스아메리카노'; break;
            case 1: product='슬러시'; break;
            case 2: product='쿠키'; break;
            case 3: product='맥주'; break;
            default: product='기부되었습니다.';
        }
        relEl.innerText = product;
    });
});


// ----------------------------------------------------------------
// 반복