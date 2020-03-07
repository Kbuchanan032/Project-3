import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlacesItem';
import './PlacesList.css'

const PlaceList = props => {
   if (props.items.lenght === 0){
       return (
           <div className="place-list center">
       <Card>
         <h2>Noplaces found, please create one</h2>
         <button>Share place</button>
       </Card>
       
       </div>
       );
   }
 
    return <ul className="place-list">
    {props.items.map(place => (
        <PlaceItem 
        key={place.id} 
        id={place.id} 
        image={place.imageUrl} 
        title={place.title} 
        description={place.description} 
        address={place.address} 
        creatorId={place.creator} 
        coordinate={place.location}
        />
        ))}
    </ul>

}

export default PlaceList;