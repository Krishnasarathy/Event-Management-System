import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Avatar } from 'rsuite';
import { Menu, MenuItem } from '@mui/material';


export default function Navbar() {
  const [openNavColorThird, setOpenNavColorThird] = useState(false);

  const navbarStyle = {
    backgroundColor: '#EEF5F9',
    fontFamily: 'Roboto, sans-serif',
    color: 'white', // Add your desired font color here
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MDBNavbar expand='lg' light style={navbarStyle}>
        <MDBContainer fluid><Link to="/Home">
          <MDBNavbarBrand  style={{color:'black', fontFamily:'sans-serif', fontSize:"1.5rem"}} >TicketGo</MDBNavbarBrand></Link>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColorThird(!openNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <Link to="/Home"><MDBNavbarLink aria-current='page' style={{color:'black', fontFamily:'sans-serif'}}>
                  Home
                </MDBNavbarLink></Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/Events"><MDBNavbarLink href='#' style={{color:'black', fontFamily:'sans-serif'}} >Events</MDBNavbarLink></Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
               <Link to="/Organize"> <MDBNavbarLink  style={{color:'black', fontFamily:'sans-serif'}} >Organize</MDBNavbarLink></Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/Booking'>
                <MDBNavbarLink href='#' style={{color:'black', fontFamily:'sans-serif'}}>Bookings</MDBNavbarLink></Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <Avatar
        onClick={handleAvatarClick}
        style={{ background: '#000', marginRight: '20px', cursor: 'pointer' }}
      >
        KS
      </Avatar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* Add your menu items here */}
      <Link to="/Profile">  <MenuItem onClick={handleClose}>Profile Dashboard</MenuItem></Link>
        
       <Link to="/"> <MenuItem onClick={handleClose}>Logout</MenuItem></Link>
      </Menu>
            
            
            
                
              
              
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
