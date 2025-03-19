import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/CSS/Login.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
  
}
from 'mdb-react-ui-kit';
import { sign_in } from '../services/auth';


// Take in and track event space bookings
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    // Basic validation
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }

    await sign_in(formData).then((res) => {
      sessionStorage.setItem('token', res.data.token);
      const token = sessionStorage.getItem('token')
      if(token)
      
        navigate('/home')
      else 
        alert('Invalid credentials. Please try again.');   
      
    }).catch((err) => {
      console.log(err);
      
    });
  };

  return (
    <MDBContainer fluid className='p-5 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          Take in and <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>track event space bookings</span>
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

               <Link to='/Signup'> <p>Create a new account</p></Link>
               <Link to='/Admin'> <p>Admin Login</p></Link>

               

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;