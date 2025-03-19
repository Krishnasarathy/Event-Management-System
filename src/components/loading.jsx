import  { useState } from 'react';
import { Button, ButtonToolbar } from 'rsuite';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter
} from 'mdb-react-ui-kit';

const Loadingss = () => {
    const [loading, setLoading] = useState(false);
    const [centredModal, setCentredModal] = useState(false);

    const handleClick = () => {
        setLoading(true);

        // Simulate loading for 5 seconds
        setTimeout(() => {
            setLoading(false);
            setCentredModal(true); // Open modal after loading
        }, 3000);
    };

    const toggleOpen = () => setCentredModal(!centredModal);

    const handleContinue = () => {
        // Navigate to the home page
        window.location.href = '/Booking';
    };


    return (
        <>
            <ButtonToolbar style={{ justifyContent: "center" }}>
                <Button appearance="primary" onClick={handleClick} loading={loading}>
                    {loading ? 'Loading...' : 'Pay'}
                </Button>
            </ButtonToolbar>

            <MDBModal  tabIndex='-1' open={centredModal} setOpen={setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle style={{ color:"#76C429"}}>Payment Status</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody style={{ color:"#000"}}>
                            <p>Payment Paid Successfully, Check your mail for E-Ticket</p>
                            <Button onClick={handleContinue} appearance="primary">Continue</Button>
                        </MDBModalBody>
                        <MDBModalFooter></MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default Loadingss;
