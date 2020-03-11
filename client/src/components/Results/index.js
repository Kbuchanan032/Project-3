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
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={img} class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">{name}</h4>
            <h5 class="card-text">{address}</h5>
            <p class='card-text'>{phone}</p>
            <p class="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">{availability}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}