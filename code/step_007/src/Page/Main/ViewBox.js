import React, {useEffect, useState, useRef} from "react";
import uuid from "react-uuid";



import Buttons from "./ViewBox/Buttons";
import ViewList from "./ViewBox/ViewList";
import Indicators from './ViewBox/Indicators';
import Slide_wrapper from './ViewBox/Slide_wrapper';

import ListData from './ViewBox/ListData';

import "./ViewBox.scss";

function ViewBox() {
  
  const total = ListData.length -1;
  let timed = 1000;
  const [count, setCount] = useState(0);
  const [intervalState, setIntervalState] = useState(true); // PERMISSION = true
  const moveSlide = useRef(null); // moveSlide.current = null

  // const listData = [1,2,3,4,5];
  // const listColor = ['#adf','#f4a','#af7','#ccf','#faa'];
  // const setUUID = [uuid(), uuid(), uuid(), uuid(), uuid()];

  const handlerNextClick = (e) => {
    e && e.preventDefault();
    setCount( count >= total ? 0 : count + 1);
  }; /* 다음 버튼 클릭했을때 */

  const handlerPrevClick = (e) => {
    e.preventDefault();
    setCount( count <= 0 ? total : count - 1);
  }; /* 이전 버튼 클릭했을때 */

  const startSlide = () =>{
    setIntervalState(true);
    if( moveSlide.current !== null) {return }
    moveSlide.current = setInterval(()=> handlerNextClick(), timed);
  } /* 슬라이드 시작 */
  
  const stopSlide = () => {
    setIntervalState(false);
    if( moveSlide.current === null) {return }
    clearInterval(moveSlide.current);
    moveSlide.current = null;
  } /* 슬라이드 정지 */

  useEffect( ()=>{
    intervalState && startSlide();
    return ()=> stopSlide();
  }, [count, intervalState])


  return (
    <section id="viewBox" onMouseEnter={stopSlide} onMouseLeave={startSlide}>
      <h2 className="blind">광고 영역</h2>

      <Buttons nextEvent={handlerNextClick} prevEvent={handlerPrevClick} />

      <Indicators 
      ListData={ListData}
      count={count} 
      total={total}
      setCount={setCount}/>

      <Slide_wrapper 
      ListData={ListData}
      count={count}/>
    </section>
  );
}

export default ViewBox;
