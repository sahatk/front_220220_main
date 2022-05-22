'use strict'; //오류를 엄격하게 체크해라.
// a_05_js_operation2.js

let num = 10;
let num2 =20;
let num3 = 15;
let rel, rel2;

// let [num, num2, num3, rel ,rel2] = [10, 20, 15];

(num > num2) ? rel=true : rel=false ; //(조건) ? 참 : 거짓;
console.log(rel);

if(num > num2) {
    rel = rel + "입니다";
    rel2 = !rel;
} else{
    rel = rel + "입니다요";
    rel2 = !!rel;
}

console.log(rel, rel2);

// ---------------------------------------------
console.clear();

if((num < num3) && (num3 > num2)) {  // 최근에는 이것도 통한다. num < num3 < num2
console.log(true); 
} else if (num3 < num) {
    console.log('num3는 10보다 작다.');
} else {
    console.log('num3는 10보다 크다.')
}


// ---------------------------------------------------------
(num3 < num2 || num3 === num2) ? 
console.log('num3는 num2보다 작거나 같다.'): 
console.log('num3는 num2보다 크다.');
// ---------------------------------------------------------

// 2022-05-07
console.clear();


let rel1 = prompt('숫자를 입력하세요');
for(let i=0; i<10; i++){
    switch(rel1){
        case i : console.log('10미만의 숫자를 선택하셨습니다. 당신은 ${i}를 선택하셨네요.');
    break;
    default : console.log('10이상의 숫자를 선택하였네요.');
    }
}

for (var i=0; i<10; i++){}
console.log(i); // i의 값이 살아나는 형태 : 10
for (let j=0; j<10; j++){}
console.log(j); // j의 존재 자체를 파악 불가 : not defined


// forEach : 배열 반복할 때
[1,3,5,'a','c'].forEach(function(data, index){
    console.log(data, index);
});

// for in
const obj = {'a':'white', 'b':'black', 'c':'gray'};
for (prop in obj) {
    console.log(prop, obj[prop]);
}



