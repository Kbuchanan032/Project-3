import React from 'react';
import UserFavorites from '../UserFavorites';
import UserReservations from '../UserReservations';
import UserHistory from '../UserHistory';

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

export function CardHeaderTabs({children}) {
  return (
    <ul className="nav nav-tabs card-header-tabs">
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
 
export function CardBody(props) {
  let selectedView = props.selectedView;
  let selectedComponent; 
  if (selectedView === 'favorites') {
    selectedComponent = <UserFavorites userID={props.userID} />
  } else if (selectedView === 'reservations') {
    selectedComponent = <UserReservations userID={props.userID} />
  } else if (selectedView === 'history') {
    selectedComponent = <UserHistory userID={props.userID} />
  } else (
    selectedComponent = props.children
  )
  return(
    <div className='card-body'>
      {selectedComponent}
    </div>
  )
}