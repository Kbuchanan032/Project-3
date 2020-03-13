import React from 'react';

import './style.css';

export function Card(props) {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export function CardHeader({children}) {
  return(
    <div className='card-header'>
      {children}
    </div>
  )
}

export function CardBody({children}) {
  return(
    <div className='card-body'>
      {children}
    </div>
  )
}