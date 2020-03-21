import React from "react";
import './style.css'

export function ResultsContainer({children}) {
  return (
    <div className='container'>
      {children}
    </div>
  );
}

export function ShelterCard({img, name, address, phone, description, availability}) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={img} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <h5 className="card-text">{address}</h5>
            <p className='card-text'>{phone}</p>
            <p className="card-text">{description}</p>
            <p className="card-text">{availability} beds available</p>
          </div>
        </div>
      </div>
    </div>
  )
}