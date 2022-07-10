import React from 'react'

// JSX안의 이미지 경로는 public JSX바깥의 이미지 경로는 src에 해두는것이 정석
function CardList({attr}) {
  const style = {backgroundImage:`url(${process.env.PUBLIC_URL}/img/cardList/${attr.img})`};
  return (
    <li>
      <a href={attr.link} style={style}>
        <dl>
          <dt>{attr.title}</dt>
          <dd>{attr.content}</dd>
        </dl>
      </a>
    </li>
  )
}

export default CardList