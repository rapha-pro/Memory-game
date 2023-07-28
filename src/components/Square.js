import React from "react";
import './cards.css';

function Square ({item, id, handleClick}) {
  const itemClass = item.stat ? " active " + item.stat : "";


  return (
    <div onClick={() => handleClick(id)} 
      className={'m-md-1 m-sm-1 d-flex justify-content-center align-items-center rounded-1 square' + itemClass}
      >
      <img 
        className='w-20'
        src={item.img} 
        alt="card"/>
    </div>
  )
};

export default Square