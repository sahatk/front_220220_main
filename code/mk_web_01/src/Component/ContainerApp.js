import React from 'react'


function Container(props) {
  console.log(props);

  return (
    <div className='container'>
      {props.children}
    </div>
  )
}

export default Container