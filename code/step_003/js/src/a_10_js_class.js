"use strict"; //오류를 엄격하게 체크해라.
// a_10_js_class.js

const DataSet = function (first, last, subject, count) {
  this.first = first;
  this.last = last;
  this.subject = subject;
  this.count = count;
  this.fullName = this.first + " " + this.last;
};

let myData1 = new DataSet("xido", "lee", "math", "60");
console.log(myData1.fullName);
// myData {first:xido, last:lee, subject:math, count:60, fullName:xido lee}

// -----------------------------------------------------------------

// es6 기법 (익스플로러에서는 오류)
class DataSet2 {
  constructor(first, last, subject, count) {
    this.first = first;
    this.last = last;
    this.subject = subject;
    this.count = count;
    this.fullName = this.first + " " + this.last;
  }
}

let myData2 = new DataSet2("sangjin", "park", "korean", "0");
console.log(myData2);


// ----------------------------------------------------



