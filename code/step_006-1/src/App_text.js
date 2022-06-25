import './App.css';
// import -> src/image, js, css, data

// function List(props){
//   // image, data, js
//   console.log( props );
//   const price = parseInt(props.price);
//   const koreaPrice = price.toLocaleString('ko-KR');
//   console.log(koreaPrice);


//   return (
//     <li>
//       <div className='image'>이미지</div>
//       <dl>
//         <dt>{props.title}</dt>
//         <dd>{props.content}</dd>
//         <dd>narration</dd>
//         <dd className='price'>{koreaPrice}원</dd>
//       </dl>
//     </li>
//   );
// }
function CardComponent(props){
  console.log( props );
  const price = parseInt(props.price);
  const koreaPrice = price.toLocaleString('ko-KR');

  const fnImage =() => {
    let imgUrl =null;
    if(!!props.url){
      imgUrl = props.url + props.image;
    }else{
      imgUrl ='image/flaticon/' + props.image;
    }
    return imgUrl;
  };

  console.log(props.url, props.image);

  // if(!!props.url){
  //   imageSource = props.url + props.image;
  // }else {
  //   imageSource = './image/flaticon' + props.image;
  // }

  return (
    <li>
      <div className='image' style={{backgroundImage: `url(${fnImage()})`}}></div>
      <dl>
        <dt>{props.title}</dt>
        <dd>{props.content}</dd>
        <dd>{(props.narr)? props.narr : '설명이 들어가는 자리'}</dd>
        <dd className='price'>{koreaPrice}원</dd>
      </dl>
    </li>
  );
}

function App() {
  const cardData = [
    {id :1, title:'my Title 001', content:'content_01', price:'3000', narr:'카드 설명_01', url:'https://picsum.photos/id/', image:'237/250/300', link:''},
    {id :2, title:'my Title 002', content:'content_02', price:'6000', url:'', image:'001-turtle.png', link:''},
    {id :3, title:'send title', content:'content_03', price:'12000', narr:'', url:'https://picsum.photos/id/', image:'239/250/300', link:''},
    {id :4, title:'title code', content:'content_04', price:'15000', narr:'카드 설명_04', url:'https://picsum.photos/id/', image:'240/250/300', link:''},
  ];

  const cardList = [];
  for(let i=0; i<cardData.length; i++){
    cardList.push(
      <CardComponent
        key={cardData[i].id}
        title={cardData[i].title}
        content={cardData[i].content} 
        price={cardData[i].price}
        narr={cardData[i].narr}
        url={cardData[i].url}
        image={cardData[i].image}
      />
    );
  }

  return (
    <div className="App">
      <ol>
        {cardList}
      </ol>
    </div>
  );
}
export default App;
