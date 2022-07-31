import React, {useState, useEffect} from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardLink from '../../Component/CardLink'
import axios from 'axios';

import './Amazing.scss';


function Amazing() {

    useEffect( ()=>{ // name.first, name.last, picture.medium
      axios('https://randomuser.me/api/?results=4')
      .then(response => setPhotoJson(response.data.results))
    } ,[]);

    const [photoJson, setPhotoJson] = useState('');
  
    // console.log('photoJson', photoJson);
    const userCode = photoJson && photoJson.map(
      (data, index) =>
          ({num : index, 
          first:data.name.first, 
          last:data.name.last, 
          image:data.picture.large})
      );
  

  return (
    <article id='amazing'>
        <h3>amazing service</h3>
        <p>Lorem ipsum dolor sit amet <br />
           consectetur adipisicing elit. Ipsum tenetur pariatur in officia nihil voluptate.</p>
        <div className='card_wrap'>
          {userCode && userCode.map(data =>
            <CardLink key={data.num}
                      bgImg = {data.image}
                      userName={data.first} 
                      userFamily={data.last} 
                      userPosition={data.first}/>
            ) }
            
        </div>
        <div className='amazing_link'>
                <a href="#">let's talk
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
      </article>
  )
}

export default Amazing