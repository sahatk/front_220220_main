import React, { useState } from 'react'
import ContainerApp from '../../Component/ContainerApp'
import './Testimonals.scss';

function Testimonals() {

  const cardList = ['r','r','r','r','r','r','r','r'];
  const [list, setList] = useState(cardList);
  // for(let i=0; i<35; i++){
  //   setList(list=> ...list)
  // }

  return (
    <article id='testimonals'>
    <ContainerApp>
      <h3>testimonals</h3>
      <p>Awesome clients we've worked with</p>
    </ContainerApp>

    <div className="worked_card_list">
      <div className='indicator'></div>

      <ul className='card_list'>
        {
          cardList.map((data, index)=>
            <li key={index}>index</li>
          )
        }
      </ul>
    </div>

    </article>
  )
}

export default Testimonals