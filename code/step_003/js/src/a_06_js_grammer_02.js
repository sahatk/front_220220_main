'use strict';

// a_06_js_grammer_02.js

// 반복문
// while
let i = 0;
while(i <= 5){
    console.log('while:', i);
    i+= 1;
}
console.log(i);

do{
    console.log(i);
    i-=1;
}
while(i > 10)

// for. forEach



for(let j=0; j<=5; j += 1){
    console.log('for:' , j);
    if(j === 3){
        break;
    }
}

// let j=0;
// for(; j<=5 ;){
//     console.log('for:' , j);
//     j += 1;
// }

for(let k=0; k<9; k++){
    let i = k+1;
    for(let h=0; h<9; h++){
        let j = h+1;
        // console.log(k + 'x' + h + '=' + (k*h));
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

console.clear();

//왜 배열을 let말고 const로 쓰나
const parts = [
    'mouse', 'keyboard', 'pen', 'note', 'laptop', 'monitor'
];

let len = parts.length;

for(let i = 0; i<len; i++){
    console.log(parts[i]);
}
// for(let i in parts) {console.log(parts[i]); }

// --------------------------------------------------------------------

console.clear();
