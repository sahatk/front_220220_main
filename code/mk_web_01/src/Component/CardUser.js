import './CardUser.scss';

function CardUser(props) {
  return (
    <div className='card_user'>
      <div className="user_image" style={{backgroundImage:`url(${props.bgImg})`}}></div>
      <p className='user_name'><span>{props.userName}</span> <span>{props.useFamily}</span></p>
      <p className='user_position'>{props.userPosition}</p>
    </div>
    
  )
}

export default CardUser