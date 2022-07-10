<<<<<<< HEAD
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import CardArea from '../../Component/CardArea';
import cardData from '../../data/newProductsData.json';
import './newBox.scss';

function NewProductsBox() {

  // const [cardData, setCardData] = useState('');
  // const dataUrl = process.env.PUBLIC_URL + '/data/NewProductsData.json';
  // useEffect( ()=>{
  //   axios(dataUrl)
  //     .then(code => { setCardData(code.data) })
  // }, [])

  return (
    <article id='newBox'>
      <h2>NewProductsBox</h2>
      {<CardArea cardData={cardData} />}
    </article>
=======
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardArea from '../../Component/CardArea'
// import NewProductsData from './data/NewProductsData'

function NewProductsBox() {
  // const cardData = NewProductsData;
  const [cardData, setCardData] = useState('');
  const dataUrl = process.env.PUBLIC_URL + '/data/NewProductsData.json';
  useEffect( ()=>{
    axios(dataUrl)
      .then(code => { setCardData(code.data) })
  }, [])

  return (
    <div>
      <h2>NewProductsBox</h2>
      {<CardArea cardData={cardData} />}
    </div>
>>>>>>> fe46a35581512e327beef5a464bae835fdf48c14
  )
}

export default NewProductsBox