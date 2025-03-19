import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import '../assets/CSS/Login.css';

function Adminlog() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    // Check if email and password match the required values
    if (formData.email === 'ksadmin@gmail.com' && formData.password === 'Ks@123') {
      // Navigate to the next page after successful login
      navigate('/TicketGo'); // Adjust the route accordingly
    } else {
      // Show error message for invalid credentials
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <MDBContainer fluid className='p-5 background-radial-gradient overflow-hidden'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            TicketGo <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}></span>
          </h1>
          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            See why our industry-best event booking system is preferred by more event venues and event planners
          </p>
        </MDBCol>
        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <MDBInput
                wrapperClass='mb-4'
                label='Email'
                id='form3'
                type='email'
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <MDBInput
                wrapperClass='mb-4'
                label='Password'
                id='form4'
                type='password'
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <MDBBtn className='w-100 mb-4' size='md' onClick={handleLogin}>
                Login
              </MDBBtn>
              <div className="text-center">
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Adminlog;
