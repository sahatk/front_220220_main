"use strick";
// a_03_cardList.js
/**
 * // 시나리오
 * 카드 리스트 만들기
 * 1. html 문서로 카드 리스트 형태 만들기
 * 2. 1개의 html문서를 js로 생성하기 or 여러개 card틀을 생성되게 만들기
 * 3. 2번의 내용중 처리하지 않은 기능 생성
 * 4. 모든 코드를 한군데 넣지 말고 하나의 기능별로 함수화 처리해서 연결되게 생성
 * 5. 하나의 기능안에 다시 복잡한 기능이 들어갈 경우 외부의 함수로 따로 처리해서 사용
 * 6. 변수끼리, 함수끼리, 기능, 이벤트, 추기변수/기능설정 내용별로 영역을 나눠서 작업
 *
 * **/

/**
 * this가 가지는 의미
 * 1. window
 * 2. 생성자함수를 사용하여 생성된 객체
 * 3. 이벤트 발생시 처리된 이벤트 주체 (단, 화살표 함수 사용시 this는 window)
 */
//============================================================================================================
// [cardList.html] 탭 기능처리내용 ============================================================================================================
// 변수 -------------------------------------------------------------------------------
const dataFile = "../data/drink_menuList.json"; //불러올 데이터 파일 경로
const elItems = document.querySelector(".content__area__menu__items");
const elMenuItems = document.querySelector(".content__part__menu_type");
let elMenuUl = elMenuItems.querySelector("ul");
let elMenuList = elMenuUl.querySelectorAll("li");

let elItemsUl;
// 함수 -------------------------------------------------------------------------------
// 탭메뉴 리스트 기능

// 탭메뉴 항목 내용 처리 기능
const fnMakeUl = function () {
  elItems.innerHTML = "<ul></ul>";
  elItemsUl = elItems.querySelector("ul");
};

const fnCategoryFilter = function (cate, cardList) {
  return cardList.filter((data, index) => {
    return data.category === cate;
  });
};

const fnSpanInsert = function (data) {
  let code = "";
  data.forEach(function (con) {
    let span = `<span>${con}</span>`;
    code += span;
  });

  return code;
};

const itemsCode = function (obj) {
  console.log(obj);
  // const imagPath = '../img/' + obj.path + '/' + 'obj.filname';
  const imagPath = `../img/${obj.path}/${obj.filename}`;
  const sliceData = obj.option.split(", ");
  const elMakeSpan = fnSpanInsert(sliceData);

  return `
        <div class="outline"><a href="#">
        <div class="image" style="${imagPath}"></div>
          <dl>
            <dt class="title">${obj.product}</dt>
            <dd class="narr">${obj.narr}</dd>
            <dd class="price">${obj.price}원</dd>
            <dd class="option">${elMakeSpan}</dd>
          </dl></a>
        </div>`;
};

// li 하나의 함수를 생성 후 삽입
const fnMakeLi = function (obj) {
  const makeLi = document.createElement("li");
  makeLi.innerHTML = itemsCode(obj);
  elItemsUl.append(makeLi);
};

// 함수기능 우선 수행 ------------------------------------------------------------------------------
// fnMakeUl();

// 기능 수행 ----------------------------------------------------------------------------------------
fetch(dataFile)
  .then((response) => response.json())
  .then(function (data) {
    // 탭 리스트
    let arrTabList = [];
    data.forEach(function (d) {
      let check = arrTabList.includes(d.category);
      if (!check) {
        arrTabList.push(d.category);
      }
    });
    console.log(arrTabList);
    elMenuItems.innerHTML = '<ul></ul>';
    elMenuUl = elMenuItems.querySelector('ul');
    let tabLi;
    arrTabList.forEach((el,index)=>{
      tabLi = document.createElement('li');
      tabLi.innerHTML = `<button type="button">${arrTabList[index]}</button>`;
      elMenuUl.append(tabLi);
      console.log(tabLi);
    });
    
    // let elMenuUl = elMenuItems.querySelector("ul");
    // let elMenuList = elMenuUl.querySelectorAll("li");

    // 탭 내용 처리
    const fnFilterContent = (menu) => {
      let m = menu || "커피류";
      const dataFilter = fnCategoryFilter(m, data); // console.log( dataFilter );

      fnMakeUl();
      dataFilter.forEach(fnMakeLi);
    };

    fnFilterContent(); //실행 한 번 시켜서 처음에 커피류 목록을 뜨게끔 함.

    elMenuList.forEach((el, index) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        const menuName = e.target.textContent;
        fnFilterContent(menuName);
      });
    });
  })
  .catch(console.log);

const arrList = [
  { name: "samsung", product: "product_01" },
  { name: "samsung", product: "product_04" },
  { name: "samsung", product: "product_06" },
  { name: "iphone", product: "product_02" },
  { name: "iphone", product: "product_03" },
  { name: "iphone", product: "product_08" },
  { name: "lg", product: "product_03" },
  { name: "xaomi", product: "product_04" },
  { name: "motorora", product: "product_05" },
];

const arrList2 = [
  "samsung",
  "samsung",
  "samsung",
  "iphone",
  "iphone",
  "iphone",
  "lg",
  "xaomi",
  "motorora",
];

let arrTabList = [];

arrList.forEach((d, i) => {
  let insertCheck = arrTabList.includes(d.name);
  if (!insertCheck) {
    arrTabList.push(d.name);
  }
});
console.log(arrTabList);

// arrTabList = arrList2.filter(d => {
//   if(arrTabList.indexOf(d) === -1) {
//     return d;
//   }
// });
// console.log(arrTabList.indexOf('sam'));

console.log(arrTabList);
