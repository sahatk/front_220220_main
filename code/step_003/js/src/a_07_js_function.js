'use strict';
// a_07_js_function.js

// function : 함수 - 복잡한 식을 하나의 묶음으로 수행하게 만드는 것

console.log(1 + 1);
console.log(3 + 4);

let num1 = 4;
let num2 = 7;
let result = num1 + num2;
console.log(result);

////////////////////////////////////////////////

// functionCode() : 내장 함수
const add = function(n1, n2){
    let rel = n1 + n2;
    // return rel;
    return false;
};

let r = add(50,5);
console.log( r );

console.log(add(5,1));


///////////////////////////////////////////////////

///********************************///
// functionCode() : 내장 함수
// .functionCode() : 메소드 
// .functionCode : 프로퍼티(객체)
///********************************///

//////////////////////////////////////////////////////

// .functionCode() : 메소드 
const objLikeFn = {
    minus : function(n1, n2){
        let rel = n1 - n2;
        return rel;
    }
};

let m1 = objLikeFn.minus(5,5);
console.log(m1);

const eachFn = function(data, index){
    console.log('data : ', data, 'index :' , index)
};

[1,4,5,6,7].forEach(eachFn);

const evt = function(){};
el.addEventListener('click', evt);



// function -> 선언식, 표현식(익명함수, 함수, 즉시실행, arrow함수)

console.clear();

// 2022-05-07


//함수란? 여러 복잡한 식을 하나의 기능으로 만들어서 필요에 따라 해당하는 식을 호출하여 사용하는 기능

// 함수의 종류
// function(){}

// 1. 함수 선언식, 함수 표현식의 개념
// 2. 기명함수: 함수 선언식으로 함수 자체에 이름을 부여
function Fn1(a,b){ //함수 Fn1 이라는 이름 투여한게 기명함수
    return a+b;
}
console.log(Fn1(3,5));
// 3. 익명함수 : 함수에 이름을 직접 부여하는것이 아니라, 이름이 없는 함수를 활용

// 3-1 함수 표현식
const Fn2 = function(){
    return a * b;
};
console.log(Fn2(5,6));

// 3-2 즉시 실행 함수 : 이름이 존재하지 않는 함수 , 함수를 생성과 동시에 실행
(function(a){
    console.log(a);
})('test');

// 3-3 화살표 함수 : ES6이후의 기능으로 화살표 모양으로 만들어진 함수
const Fn3 = function(a,b){return a%b; };

const Fn4 = (a,b) => {return a%b; };

console.log(Fn3(5,3));
console.log(Fn4(7,2));

