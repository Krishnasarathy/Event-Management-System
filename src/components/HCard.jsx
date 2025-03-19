import PropTypes  from "prop-types";
import { Button, ButtonToolbar } from 'rsuite';
import { Panel } from "rsuite";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from 'mdb-react-ui-kit';
import { useState } from "react";
import '../assets/CSS/Cd.css'


const HCards = ({name,content,Image,Btn}) => {
  const [centredModal, setCentredModal] = useState(false);
  
  const toggleOpen = () => setCentredModal(!centredModal);

  return (
    
    <><Panel className="cd" shaded bordered bodyFill style={{ width: 240 }}>
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
      </Panel>


    </Panel>
    
    

<MDBModal tabIndex='-1' open={centredModal} setOpen={setCentredModal}>
  <MDBModalDialog centered>
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>{name}</MDBModalTitle>
        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
      <MDBInput label='Name' id='form1' type='text' /><br/>
      <MDBInput label='Mobile' id='form1' type='number' /><br/>
        <p>
          Fill the follwing details for {name}
        </p>
      </MDBModalBody>
      <MDBModalFooter>
      <MDBBtn color='secondary' onClick={() => {
          alert('Thanks for Booking! Check Your Email for Payment Details');
          setCentredModal(false); 
        }}>
          Submit
        </MDBBtn>
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>  
      
      </>
    
  )
}
HCards.propTypes={
    name:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    Image:PropTypes.string.isRequired,
    Btn:PropTypes.string.isRequired,
    Btn2:PropTypes.string.isRequired
}
export default HCards
