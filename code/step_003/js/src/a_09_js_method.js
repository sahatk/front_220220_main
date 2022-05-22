'use strict';
//a_09_js_method.js

(function(){
    let arr = [1,4,5];

    arr[3] = 10;

    arr.push('apple','kiwi');
    arr.push('banana'); // push : 맨 마지막 인덱스에 집어넣기

    arr.pop(); // pop : 맨 마지막 인덱스 값 삭제하기
    arr.pop(); 

    arr.shift(); //shift : 맨 첫 인덱스 값 삭제하기 
    arr.unshift(7); // unshift : 맨 첫 인덱스 값 교체하기

    console.log(arr);



    // console.log(arr.length);
    // arr.forEach(function(d, i){console.log(i,d)});
    arr.splice(2,2); // splice(2,2) : 2+1번째 부터 인덱스값 2개를 지운다.
    console.log(arr);

    const arr2 = [...arr];
    console.log(arr2);

    let addr = '서울시 마포구 연남동';
    const arrAdd = addr.split(' ');
    console.log(arrAdd);
    let num = '010-2244-7865';
    const arrNum = num.split('-'); // split : '-' 단위로 쪼개서 배열로 나타내게
    console.log(arrNum);
    let joinNum = arrNum.join('-'); // join : 배열 값을 하나로 나타내게
    console.log(joinNum);
})();
