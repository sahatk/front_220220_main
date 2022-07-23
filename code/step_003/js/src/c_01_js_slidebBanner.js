// c_01_js_slidebBanner.js
(function(){
    // ==================================
    // 시나리오
    // 1~2줄짜리 설명
    // 버튼 클릭시 원하는 화면이 가도록 이동하여 배치되게 제작

    // 상세_시나리오
    // 1. 다음버튼 클릭
    // 2. 이전버튼 클릭
    // 3. 인디케이터 선택
    // 4. 버튼기능 공유
    // 5. 처음/마지막에서 슬라이드 자연스럽게 이동
    // 6. 일정시간마다 수행
    // 7. 외부데이터 불러와서 적용

    // slide banner
    // 변수 ==========================================================
    const viewBox = document.querySelector('#viewBox'); //viewBox 선택
    const slideBtnsArea = viewBox.querySelector(".slide_buttons"); //slide_buttons 영역 선택
    const slideNextBtn = slideBtnsArea.querySelector('.next'); //next 버튼
    const slidePrevBtn = slideBtnsArea.querySelector('.prev'); //prev 버튼
    const indicatorList = viewBox.querySelector('.indicators > ul'); //인티케이터 아이템들 ul 영역
    const indicatorItems = indicatorList.querySelectorAll('li'); // 인디케이터 아이템 li 들
    const slideViewArea = viewBox.querySelector('.view_area'); //슬라이드 이미지6개의 영역
    const slideViewAreaList = slideViewArea.querySelector('ul'); // 슬라이드 이미지영역 ul

// 기능수행 / 추가 변수 =====================================================================================

    const PreSlideListItems = slideViewAreaList.querySelectorAll('li');
    const lastSlideItem = PreSlideListItems[PreSlideListItems.length-1].cloneNode(true); // 마지막 슬라이드 li을 PreSlideListItems 선택자에 클론(복사하기)
    slideViewAreaList.prepend(lastSlideItem); // 맨앞에 li 태그 추가

    const slideViewItems = slideViewAreaList.querySelectorAll('li'); // li

    let COUNT = 0;
    let PRECOUNT = COUNT;
    let slideLen = slideViewItems.length -1; //슬라이드 이미지는 원래 5개이므로 length(6) -1 // slideViewItems.length : 인디케이터 아이템 li 개수 (6개)
    let ACTIONNAME = 'action'; //li에 class 'action'
    let PERMISSION = true; //중복 클릭 방지
    let TIMED = 600; // 중복 클릭 방지 시간
    let ANINONE = 'transition_none';

    // 함수 ==========================================================
    const fnUlMove = (num) => {
        if(PRECOUNT === 0 && num === slideLen-1){ //처음슬라이드를 prev버튼으로 움직이면
            slideViewAreaList.style.left = '100%';
            setTimeout(()=>{
                slideViewAreaList.classList.add(ANINONE); //애니메이션 클래스 transition_none 적용
                slideViewAreaList.style.left = num * -100 + '%'; 

                setTimeout(()=>{
                    slideViewAreaList.classList.remove(ANINONE);
                }, 0);
            }, TIMED);
        }else if(PRECOUNT === slideLen-1 && num === 0){ //마지막슬라이드를 next버튼으로 움직이면
            slideViewAreaList.classList.add(ANINONE);
            slideViewAreaList.style.left = '100%';
            setTimeout(()=>{
                slideViewAreaList.classList.remove(ANINONE);
                slideViewAreaList.style.left = num * -100 + '%';
            }, 0);
        }else{
            slideViewAreaList.style.left = num * -100 + '%'; //나머지 슬라이드는 그냥 이미지 슬라이드 위치이동시키기
        }
    };

    const fnIndigatorCheck = (num) => { // 인디케이터 action 적용 시키기
        // slideViewItems[num].classList.add(slideViewItems);
        indicatorItems.forEach((el,idx)=>{ //각각의 인디케이터아이템에 클래스 'action' 집어넣을지 말지 if문
            (num === idx) ?  
            el.classList.add(ACTIONNAME) :  
            el.classList.remove(ACTIONNAME);
            
        });
    };

    const fntimedSet = () =>{ //중복 클릭 방지 시간
        setTimeout( () => {
            PERMISSION = true;
            PRECOUNT = COUNT;
        }, TIMED)
    }

    const handlerNextClick = function(e){ // 다음 이미지 슬라이드 기능
        e.preventDefault();
        if(PERMISSION) { // PERMISSION이 TRUE이므로 권한 허용
            PERMISSION = false; // 클릭 중복 방지를 위해 권한 억제
            PRECOUNT = COUNT;
            (COUNT >= slideLen-1) ? COUNT = 0 : COUNT += 1; //1. COUNT가 인디케이터 li 개수보다 크거나 같으면 => COUNT를 0으로 리셋 // 2. COUNT가 인디케이터 li 개수보다 작으면 COUNT + 1
            fnUlMove(COUNT); //이미지 슬라이드 위치이동시키기
            fnIndigatorCheck(COUNT); // 인디케이터 action 적용 시키기
            fntimedSet(); //중복 클릭 방지 시간
        }
        
    };

    const handlerPrevClick = function(e){
        e.preventDefault();
        if(PERMISSION) {
            PERMISSION = false;
            PRECOUNT = COUNT;
            (COUNT <= 0) ? COUNT = slideLen-1 : COUNT -= 1;
            fnUlMove(COUNT);
            fnIndigatorCheck(COUNT);
            fntimedSet();
        }
        
    };

    



    // 이벤트 ==========================================================
    slideNextBtn.addEventListener('click', handlerNextClick); //next버튼 클릭
    slidePrevBtn.addEventListener('click', handlerPrevClick); //prev버튼 클릭

    indicatorItems.forEach((el,idx)=>{ //인디케이터아이템 li들 각각 클릭했을때 실행
        el.addEventListener('click', function(e){
            e.preventDefault();
            if(PERMISSION){ //PERMISSION이 true면 실행시키고
                PERMISSION = false; // 중복 클릭 방지를 위해 권한을 억제시킨다.
                PRECOUNT = COUNT;
                COUNT = idx; 
                fnUlMove(COUNT); // 1. 인디케이터아이템 li들 각각 클릭했을때, 이미지 슬라이드 위치이동시키기
                fnIndigatorCheck(COUNT); // 2. 인디케이터아이템 li들 각각 클릭했을때, 클릭한 인디케이터아이템에 bgColor 'action' 넣기
                fntimedSet(); // 3. 인디케이터아이템 li들 각각 클릭했을때,  바로 중복 클릭 방지 시간
            }
            
        })
    });


})()
