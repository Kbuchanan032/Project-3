import React from 'react';
import { Link } from 'react-router-dom'; //this will render an ankor tab

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
      <h3>LIST OF AVAILABLE SHELTERS</h3>
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h2>{props.address}</h2>
            <h3>
              {props.bedsCount} {props.bedsCount === 1 ? 'Bed' : 'Beds'}
            </h3>
          </div>
        </Link>
      </Card>
    
    </li>
  );
};

export default UserItem;
