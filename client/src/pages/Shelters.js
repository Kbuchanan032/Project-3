import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron'
import API from '../utils/API'


class Shelters extends Component {
  state = {
    shelters: [],
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Jumbotron />
          </div>
        </div>
      </div>
    )
  }
}