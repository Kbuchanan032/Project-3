import React, { Component } from "react";
import { useHistory } from 'react-router-dom';
import API from "../utils/API";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Col, Row, Container } from "../components/Grid";
import { ProfileHeader } from "../components/ProfileHeader";
import { Card, CardHeader, CardBody } from "../components/Card";
import { ShelterCard } from "../components/Results";
import { Modal, Button} from 'react-bootstrap';

import './assets/ProviderProfile.css';

function MyVerticallyCenteredModal(props) {
  const [message, setMessage] = React.useState('');
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      img: 'https://via.placeholder.com/250',
      name: '',
      address: '',
      phone: '',
      description: '',
      availableBeds: '',
      totalBeds: '',
      provider: localStorage.getItem('user')
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Please provide the name of the shelter'),
      address: Yup.string()
        .required('Please provide an address'),
      phone: Yup.string()
        .min(10, 'Please include a valid phone number (including the area code')
        .required('Required'),
      description: Yup.string()
        .required('Please tell us a bit about the shelter'),
      availableBeds: Yup.number()
        .required('Required'),
      totalBeds: Yup.number()
      .required('Required')

    }),
    onSubmit: value => {
      API.saveShelter(value).then((result) => {
        console.log(result)
        props.onHide()
      })
      .catch((error) => {
        if(error) {
          setMessage({ message: 'Unable to save shelter'})
        }
      });
    }
  });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a Shelter
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={formik.handleSubmit}>
          <label htmlFor='name'>Shelter Name</label>
          <input 
            id="name" 
            name="name"
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name} 
          />
          {formik.errors.name && formik.touched.name ? ( <div>{formik.errors.name}</div>) : null}

          <label htmlFor='address'>Shelter Address</label>
          <input 
            id="address" 
            name="address"
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address} 
          />
          {formik.errors.address && formik.touched.address ? ( <div>{formik.errors.address}</div>) : null}

          <label htmlFor='phone'>Shelter Phone Number</label>
          <input 
            id="phone" 
            name="phone"
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone} 
          />
          {formik.errors.phone && formik.touched.phone ? ( <div>{formik.errors.phone}</div>) : null}

          <label htmlFor='description'>Shelter Description</label>
          <input 
            id="description" 
            name="description"
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description} 
          />
          {formik.errors.description && formik.touched.description ? ( <div>{formik.errors.description}</div>) : null}
          <label htmlFor='availableBeds'>Currently Available Beds</label>
          <input 
            id="availableBeds" 
            name="availableBeds"
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.availableBeds} 
          />
          {formik.errors.availableBeds && formik.touched.availableBeds ? ( <div>{formik.errors.availableBeds}</div>) : null}

          <label htmlFor='totalBeds'>Total Number of Beds</label>
          <input 
            id="totalBeds" 
            name="totalBeds"
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.totalBeds} 
          />
          {formik.errors.totalBeds && formik.touched.totalBeds ? ( <div>{formik.errors.totalBeds}</div>) : null}
          <button type="submit">Save</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



export class ProviderProfile extends Component {
  state = {
    user: `${localStorage.getItem('user')}`,
    userData: '' ,
    shelters: [],
    modalShow: false
  }

  componentWillMount() {
    this.getData()
    this.getShelters()
  }
  componentWillUpdate() {
    this.getShelters()
  }

  getShelters = () => {
    API.getSheltersByProviderId(this.state.user).then(result => this.setState({shelters: result.data}))
  }

  getData = () => {
    API.getProvidersById(this.state.user).then(result => this.setState({userData: result.data}))
  }
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <ProfileHeader userFirstName={this.state.firstName} userLastName={this.state.lastName} >

            </ProfileHeader>
          </Col>
        </Row>

        <Row>
          <Col size='sm-12'>
            <Card>
              <CardHeader>
                <h3 id='availability-header'>{this.state.userData.firstName}'s Shelters</h3>
                <Button variant="primary" onClick={() => this.setState({modalShow: true})}>
                  +
                </Button>
              </CardHeader>
              <CardBody>
                
                <Row>
                  <Col size='sm-12'>
                  {this.state.shelters.length ? this.state.shelters.map(data => 
                  <ShelterCard
                    img={data.img} 
                    name={data.name} 
                    address={data.address} 
                    phone={data.phoneNumber}
                    description={data.description}
                    availability={data.availableBeds} />
                ) : 'Nothing to Show Yet'}
          
                  </Col>
                  
                </Row>

                <MyVerticallyCenteredModal
                  show={this.state.modalShow}
                  onHide={() => this.setState({modalShow: false})}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
};
