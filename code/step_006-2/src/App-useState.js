import { useEffect, useState } from "react";
import "./App.css";

// 제목 : useState() : 함수 재호출

function App() {
  const log = "React가 실행되고 있습니다.";
  // console.log(log);
  //////////////// const [변수, 재호출 함수] = useState(초기값);///////////////
  const [number, setNumber] = useState(0); //초기값은 number = 0
  const [view, setView] = useState(false); //초기값은 view = false

  const data = ['banana','graph','orange','strawberry']; // 배열

  const [dataNum, setDataNum] = useState(0); //초기값은 dataNum = 0
  const [myClass, setMyClass] = useState('on'); //초기값은 myClass = 'on'

  const date = new Date();
  const myYear = date.getFullYear(); // 현재 년도
  const myMonth = date.getMonth() + 1; // 현재 월
  const myDay = date.getDate(); // 현재 날짜
  const week = ['일','월','화','수','목','금','토'];
  const myDayWeek = week[date.getDay()];
  const myH = date.getHours() < 12 ? date.getHours() : Math.ceil(date.getHours()-12);
  const myM = date.getMinutes();
  const myS = date.getSeconds();

  const [myDate, setDate] = useState(0);

  console.log(myYear, myMonth, myDay, myDayWeek);
  console.log(myH, myM, myS);
  

  useEffect(()=>{
    const interval = setInterval(()=>{
      setDate(myS)
    }, 1000);

    return () =>{
      clearInterval(interval);
    }
  });
 
  const handlerClick = function (e) {
    e.preventDefault();
    setNumber( number < 10 ? number + 1 : 0);
    // number < 10 ? setNumber(number + 1) : setNumber(0);
  };
  const [cssView, setCssView] = useState('block'); //초기값은 cssView = 'block'
  const handlerShow = function(e){
    e.preventDefault();
    setCssView(cssView === 'block' ? 'none' : 'block');

    // setView(view ? false : true);
    // view ? setView(false) : setView(true);
    console.log(view);
  };

  const box = {
    width:'auto',
    maxWidth : '600px',
    margin: '60px',
    border:'1px solid #567',
    backgroundColor:'#eff',
    boxSizing:'border-box'
  };


  const viewStyle ={
    display: cssView
    // (view ? 'block' : 'none')
  };

  const handlerCount = function(e){
    // dataNum < data.length-1 ? setDataNum(dataNum + 1) : setDataNum(0);
    setDataNum( dataNum < data.length-1 ? dataNum + 1 : 0);
  }

  const handlerClassName  = function(){
    // myClass class 이름 on이 이름 유무처리
    // myClass === 'on' ? setMyClass('off') : setMyClass('on');

    let sam;
    myClass === 'on' ? sam = 'off' : sam = 'on';
    setMyClass(sam);
  }


  return (
    <div className="App">
      <div className="box" style={box}>
        <div>{number}</div>
        <div><button type="button" onClick={handlerClick}>클릭</button></div>
      </div>
      <div style={box}>
        <div className="view" style={viewStyle}>보이게만들기</div>
        <div>
          <button onClick={handlerShow}>show/hide</button>
        </div>
      </div>
      <div style={box}>
        <p>{data[dataNum]}</p>
        <div><button onClick={handlerCount}>countUp</button></div>
      </div>

      <div style={box} className='viewOn'>
        <p className={myClass}>classNameSet</p>
        <div><button onClick={handlerClassName}>countUp</button></div>
      </div>
      <p>{myDate}초</p>
    </div>
    
  );
}

export default App;
