'use strick';
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



// 변수 -------------------------------------------------------------------------------
const dataFile = '../data/drink_menuList.json'; //불러올 데이터 파일 경로
const elItems = document.querySelector('.content__area__menu__items');
    elItems.innerHTML = '<ul></ul>';
    const elItemsUl = elItems.querySelector('ul');
    

// 함수 -------------------------------------------------------------------------------
      const fnCategoryFilter = function(cate, cardList){
        return cardList.filter((data, index)=>{
          return data.category === cate;
        });
      };

      const fnSpanInsert =function(data){
        let code = '';
        data.forEach(function(con){
          let span = `<span>${con}</span>`;
          code += span;
          
        });

        return code;
      };

      const itemsCode = function(obj){
        console.log(obj);
        // const imagPath = '../img/' + obj.path + '/' + 'obj.filname';
        const imagPath = `../img/${obj.path}/${obj.filename}`;
        const sliceData = obj.option.split(', ');
        const elMakeSpan =  fnSpanInsert(sliceData);
       


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

      const fnMakeLi = function(obj){
        const makeLi = document.createElement('li');
        makeLi.innerHTML = itemsCode(obj);
        elItemsUl.append(makeLi);
      }; 

// 기능 수행 ----------------------------------------------------------------------------------------
fetch(dataFile)
  .then((response)=>response.json())
  .then(function(data){
    const dataFilter = fnCategoryFilter('커피류', data);
    // console.log( dataFilter );

    dataFilter.forEach(fnMakeLi);    

  })
  .catch(console.log);