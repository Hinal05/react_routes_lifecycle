import React from 'react'; // ESX

const Card = (props) => {
  const style = {
    background: 'red'
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default Card;
