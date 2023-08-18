import React from 'react';
import './styles.css';

const Button = ({title}) => {  

  return (
    <div className='wrapper'>
      <button>{title}</button>
    </div>
  )
}

export default Button