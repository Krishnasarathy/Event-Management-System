import { Button, ButtonToolbar, Panel, PanelGroup} from 'rsuite';
import PropTypes  from "prop-types";
import'../assets/CSS/Book.css'
import { useEffect, useState } from 'react';
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



const Bdetail = ({name,info}) => {
    const [status, setStatus] = useState('');
    const style = {
        color: status
    }
    // let statusClass = '';

    // Set the class based on the value of the info prop
    const [centredModal, setCentredModal] = useState(false);

    const toggleOpen = () => setCentredModal(!centredModal);
    useEffect(()=>{
        console.log(info);
        if (info === 'Confirmed') {
            setStatus('green');
          } else if (info === 'Pending') {
            setStatus('orange');
          } else if (info === 'Declined') {
            setStatus('red');
          }else if (info === 'Expired') {
            setStatus('#900C3F');
          }
    },[info])
    return (
    <><div className={'book-detail ${statusClass}'}>
        <PanelGroup className='panel'>
          <Panel header={name}>
            <p>Status:<br />
              <span style={style}>{info}</span> </p>
            <ButtonToolbar style={{ justifyContent: "right" }}>
              <Button onClick={toggleOpen} appearance="primary">View</Button>
            </ButtonToolbar>
          </Panel>

        </PanelGroup>
      </div>
      <MDBModal tabIndex='-1' open={centredModal} setOpen={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>{info}</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <p>
                  Your Booking was {info}
                </p>
              </MDBModalBody>
              <MDBModalFooter>
                
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal></>
  )
}
Bdetail.propTypes={
    name:PropTypes.string.isRequired,
    info:PropTypes.string.isRequired
    
}
export default Bdetail
