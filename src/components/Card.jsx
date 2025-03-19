import PropTypes  from "prop-types";
import { Button, ButtonToolbar } from 'rsuite';
import { Panel } from "rsuite";
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { FaLocationDot } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

import '../assets/CSS/Cd.css'


const Cards = ({name,content,Image,Btn,location,price,date}) => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);


  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/booka/${name}/${content}`);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    
    <>
    <Panel className="cd" shaded bordered bodyFill style={{ width: 240 }}>
      <img style={{ objectFit: "cover" }} src={Image} height="240" width={240} />
      <Panel  header={name}>
        <p>
          <small>
            {content}
          </small>
        </p>
        <ButtonToolbar style={{ justifyContent: "center" }}>
          <Button onClick={toggleOpen} appearance="primary">{Btn}</Button>
          
        </ButtonToolbar>
        {/* <Button onClick={handleNavigate} appearance="primary">{Btn}</Button> */}
      </Panel>


    </Panel>
    
    

    {/* <MDBBtn onClick={toggleOpen}>LAUNCH DEMO MODAL</MDBBtn> */}
    <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
  <MDBModalDialog>
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle style={{color:"#9719e0"}}>{name}</MDBModalTitle>
        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
        <h5 style={{color:"#727272"}}><FaLocationDot /> {location}</h5><br/>
        <h5 style={{color:"#727272"}}><IoTicket /> {price}</h5><br/>
        <h5 style={{color:"#727272"}}><MdDateRange /> {date}</h5><br/>
        <p>These terms and conditions govern the relationship between you and EventBookings.</p>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          I agree to the terms and conditions
        </label>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color='secondary' onClick={toggleOpen}>
          Close
        </MDBBtn>
        <MDBBtn onClick={handleNavigate} disabled={!isChecked}>Book</MDBBtn> {/* Disable the button if checkbox is not checked */}
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>



      
      
      
      
      
      
      
      
      </>
    
  )
}
Cards.propTypes={
    name:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    Image:PropTypes.string.isRequired,
    Btn:PropTypes.string.isRequired,
    Btn2:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired
}
export default Cards
