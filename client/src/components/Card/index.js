import React from 'react';
import UserFavorites from '../UserFavorites';
import UserReservations from '../UserReservations';
import UserHistory from '../UserHistory';

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
  let selectedComponent; 
  if (selectedView === 'favorites') {
    selectedComponent = <UserFavorites userID={userID} userFavorites={data}/>
  } else if (selectedView === 'reservations') {
    selectedComponent = <UserReservations userID={userID} />
  } else if (selectedView === 'history') {
    selectedComponent = <UserHistory userID={userID} />
  } else (
    selectedComponent = children
  )
  return(
    <div className={`card-body${className ? className : ''}`}>
      {children}
    </div>
  )
}