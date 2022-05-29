"use strict";

// a_04_accordion.js

/**  // 시나리오 : 아코디언 메뉴를 형성
 * 1. dt(button)를 클릭시, 뒤에오는 dd를 나타나게 만들자!
 * 2. dt를 클릭시 dd가 나타나는데 다른 dl에 있는 dd는 사라지게 만들자! (선택 순번/다른순번을 체크)
 * 3. dd를 나타나게 만들때 animation을 적용해 주세요. (펼쳤을 경우의 높이값이 필요. : 0값 -> 적용높이값까지 움직임)
 * 4. dd를 나타나게 만들때 다른 dd에서도 animation을 적용하여 사라지게 만들기
 * 5. dt를 클릭시 이미 펼쳐져 있는 dd라면 animation을 이용하여 사라지게 만들기
 * 6. 구글시트에서 json형식으로 변환하여 값 처리/ 변경
 * (`http://gsx2json.com/api?id=${구글시트 ID명}&sheet=${구글시트 이름}`)
 * 6-1 : 구글시트 가져올 조건 - 공유처리되어있어야, 시트이름 영문
 * 6-2 : id명은 
 */
// 변수 -----------------------------------------------------


// const SHEETID = '구글시트 ID명'; //사이트 url의 id명
// const SHEETNAME = 'accordion'; //시트이름을 입력
// const JSONURL = `http://gsx2json.com/api?id=${구글시트 ID명}&sheet=${구글시트 이름}`; ///


const elAccorArea = document.querySelector('.accordion_area');
let elAccorDl;
const ACTIONTEXT = 'action';
let checkHeight = [];
let timed = 500;



// 함수 ------------------------------------------------
const ACCORDIONCODE = function(number, title, content) {
    return `<dl>
    <dt>
    <button type="button"><span>${number+1}</span>.<span>${title}</span><i class="fa-solid fa-arrow-down"></i></button>
    </dt>
    <dd><div class="content">${content}</div></dd>
    </dl>`
};

const fnDdHeightCheck =function(){ //각 dd의 높이 측정 체크
    elAccorDl.forEach((el,idx)=>{
        const dd = el.querySelector('dd');
        dd.style.display = 'block';
        setTimeout( () =>{
            checkHeight.push(dd.clientHeight);
            dd.removeAttribute('style');
        }, 0);
    
    });
}

const fnSlideDown =function(el, n){ //각 dd의 슬라이드다운
    const elDd = el.querySelector('dd');
    elDd.style = `height:0; overflow:hidden; transition: height ${timed}ms ease`;
    setTimeout(()=>{
        elDd.style.height = checkHeight[n] + 'px';
    }, 0)
    
};

const fnSlideUp =function(el, n){ //각 dd의 슬라이드업
    const elDd = el.querySelector('dd');
    elDd.style.height = 0;
    setTimeout(()=>{
        el.classList.remove(ACTIONTEXT);
        elDd.removeAttribute('style');
    }, timed);
}

const fnRemoveAction = function(n){
    elAccorDl.forEach((el, idx) =>{
        if(n === idx){
            el.classList.add(ACTIONTEXT);
            fnSlideDown(el, idx);
        }else{
            fnSlideUp(el, idx);
            // el.classList.remove(ACTIONTEXT);
        }
    });
};






// test : fetch는 비동기 처리이기 떄문에 필요한 data를 불러온 이후에 기능을 처리해야 한다.
fetch(JSONURL)
.then(data=>data.json())
.then(data=>data.rows)
.then(jsonData => {
    //html 코드 삽입 수행
    const acordionData = jsonData;
    acordionData.forEach((data,index) => {
        elAccorArea.insertAdjacentHTML('beforeend',ACCORDIONCODE(index, data.title, data,content));
    });
    // 기능 수행 ------------------------------------------------------------
    elAccorDl = elAccorArea.querySelectorAll("dl");
    fnDdHeightCheck();

    // 이벤트 수행 --------------------------------------------------
    // dt클릭시 아코디언 수행
    elAccorDl.forEach((el,idx)=>{
        let elDt = el.querySelector('dt');
        elDt.addEventListener('click',function(e){
            e.preventDefault();
            const check = el.classList.contains(ACTIONTEXT);
            (check) ? fnSlideUp(el) : fnRemoveAction(idx);
        });
    });
})
.catch(console.log);