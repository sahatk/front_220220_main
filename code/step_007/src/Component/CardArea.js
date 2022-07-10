import React , {useState, useEffect} from 'react'
import CardList from './Card/CardList'

function CardArea({cardData}) { 
  // 조건부 렌더링 : 조건문의 형식과 유사하지만 그 형식을 단순하게 수행할 수 있도록 처리
  // (if(true){수행} -> ()? 실행 : null;)  === (값 && 값이 있을때 수행)
  
  // const codeList = cardData ? cardData.map(data => <CardList attr={data} key={data.id} />) : null;
  const codeList = cardData && cardData.map(data => {return<CardList attr={data} key={data.id} />});
  
    return (
    <div className='CardArea'>
      <ul>
        {codeList}
      </ul>
    </div>
  )
}

export default CardArea