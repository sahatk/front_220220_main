'use strict'; //오류를 엄격하게 체크해라.
// a_11_js_method2.js

// --------------------------------------------------------
// sort

const arr = ['banana', 'orange', 'graph', 'kiwi', 'strawberry'];
const arrCopy = [...arr]; //익스플로러 x
arrCopy.sort(); //알파벳 정렬
console.log(arr, arrCopy);
arrCopy.reverse(); // 정렬 뒤집기
console.log(arr, arrCopy);

const arrNum = [1,2,3,4,5,6,7,8,9,10,11,15,28,29,35,50];
// arrNum.sort((a,b)=> a-b); //오름차순
// arrNum.sort((a,b)=> b-a); //내림차순
arrNum.sort((a,b)=> { return a-b });
console.log(arrNum);


// --------------------------------------------------------
// reduce

const arrNum2 = [1,3,5,8,10,22,53];
let totalNum = 0;
for(let i = 0; i<arrNum2.length; i++){
    totalNum += arrNum2[i];
}
console.log(totalNum);


let totalNum2 = arrNum2.reduce((a,b) => {return a + b}); //배열의 모든 인덱스 값을 합해라.
// let totalNum2 = arrNum2.reduce(function(a,b){
//     return a + b;
// });
console.log(totalNum2);


// --------------------------------------------------------
// filter : filter 메소드는 내부함수의 return에서 조건이 참인 경우만 허용하게 만들어 주는 기능
const filterNum = [];
for(let i = 0; i<arrNum2.length; i++){
    if(arrNum2[i] < 5 && arrNum[i] < 30){
        filterNum.push(arrNum2[i])
    }else{
        continue; //건너뛰기
    }
}
console.log(filterNum);


const filterArrNum = arrNum2.filter((data)=> {return 5 < data && data < 10;});
// const filterArrNum = arrNum2.filter(function(data){
//     return 5 < data && data < 10;
// });
console.log(filterArrNum);


// --------------------------------------------------------
// map : 배열의 내용을 일괄 수행하는 기능
const upDataNum = [];
// for(let i = 0; i<arrNum2.length; i++) {
//     let sampleNum = arrNum2[i] ** 2;
//     upDataNum.push(sampleNum);
// }

arrNum2.forEach(function(data,index){
    let sampleNum = data ** 3;
    upDataNum.push(sampleNum);
});
console.log(arrNum2, upDataNum);


const setArrNum = arrNum2.map((data,index)=>{return data ** 3;});
// const setArrNum = arrNum2.map(function(data,index){
//     return data ** 3;
// });
console.log(setArrNum);


// reduce : [1,2,3,4,5,6] => 1+2+3+4+5+6
// map :    [1,2,3,4,5,6] => [1,4,9,16,25,36]
// filter : [1,2,3,4,5,6] => [2,3,4]