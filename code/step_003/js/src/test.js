'use strict'; //오류를 엄격하게 체크해라.

// a_06_js_grammer_02.js

// 반복문
// while
let i = 0;
while(i <= 5){
    console.log('while:', i);
    i+=1;
}
console.log(i);

do{
    console.log(i);
    i--;
}
while(i > 10)

//for, forEach

for(let j=0; j<=5; j++){
    console.log('for:',j);
    if(j === 3){
        break;
    }

}

for(let k=0; k<9; k++){
    let i = k+1;
    for(let h=0; h<9; h++){
        let j = h+1; 
        let result = `${i} x ${j} = ${i*j}`;
        console.log(result);
    }
}

console.clear();
// 왜 배열을 let말고 const 쓰나

const parts = [
    'mouse', 'keyboard', 'pen', 'note', 'laptop', 'monitor'
];

let len = parts.length;

for(let i = 0; i<len; i++){
    console.log(parts);
}