import React from 'react';
import './Cell.css';

const Cell = () => {

  let nb = Math.floor(Math.random() * 10);

  return (
    // <div className={Cell} style={{color: '#12C33C'}}>
    <div className="Cellule" style={{color: '#12C33C'}}>
    {nb}
    </div>
  )
}

export default Cell;
