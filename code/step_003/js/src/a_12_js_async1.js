'use strict'; //오류를 엄격하게 체크해라
// a_12_js_async1.js


// 비동기인 setTimeout()과 setInterval()
// 비동기 : 외부문서 불러오거나 시간차로 불러오거나...

let num = 0;
let timed = 1000;
// 5초 뒤에 num이라는 변수에 10을 더하기
setTimeout(()=>{
    num += 10;
    console.log('timeout :', num+= 10);
}, timed*5);


// 1초마다 num변수에 3씩 더하기
let setI = setInterval(()=>{
    console.log('interval: ', num += 3);
    if(num >= 40){
        clearInterval(setI);
    }
}, timed);

num += 1;
console.log(num);
num += 2;
console.log(num);
num += 3;
console.log(num);
num += 4;
console.log(num);

// 외부문서를 불러온다!
// js에서 필요한 문서를 중간에 호출하여 사용!
// html문서가 비어있다, 이곳에 필요한 코드를 생성하여 넣는다.

//$.ajax({ url:'./a.json', dataType:'json'}).done(function(data){})
// ES5 : new XMLHttpRequest() -> open -> send
// ES6 : fetch(), promise(), async/await -->IE에서는 그냥 안됨, axios()

//https://www.mockaroo.com/ --> 랜덤 json 사이트

fetch('../js/data/mockaroo_01.json')
.then((response) => { return response.json() })
.then( (data) => {
    const user1 = data.filter(function(arr, idx){
        return arr.first_name === 'Sergei';
    });
    return user1;
})
.then((data) => {console.log(data);})

/*
fetch('../js/data/mockaroo_01.json')
.then(response => response.json() )
.then(data=>data.filter(arr => arr.id === 2) )
.then(console.log)
*/