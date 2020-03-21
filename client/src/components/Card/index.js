import React from 'react';

import './style.css';

export function Card(props) {
  return (
    <div className={`card${props.className ?  props.className : ''}`} style={props.style}>
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

export function CardHeaderTabs({props, children}) {
  return (
    <ul className="nav nav-tabs card-header-tabs" {...props}>
    {children}
    </ul>
  )
}

export function CardNavItem(props) {
  return (
    <li className="nav-item">
    <a className={`nav-link${props.className}`} href={props.href} onClick={props.onClick}>{props.label}</a>
  </li>
  )
}
 
export function CardBody({selectedView, userID, data, children, className}) {
  
  return(
    <div className={`card-body${className ? className : ''}`}>
      {children}
    </div>
  )
}