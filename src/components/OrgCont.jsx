import {
    
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody
    
    
  }
  from 'mdb-react-ui-kit';
  import { SiPaytm } from "react-icons/si";
  import { FaGooglePay } from "react-icons/fa";
  import { FaCcPaypal } from "react-icons/fa";
  import { FaApplePay } from "react-icons/fa";
  import { FaCcAmazonPay } from "react-icons/fa";






const OrContainer = () => {
  return (
    <MDBContainer fluid className='p-5  overflow-hidden'>

    <MDBRow>

      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h4 className="my-1 display-3 fw-bold ls-tight px-3" style={{color:"#2599EC",fontSize: "45px"}}>
        
            Get instant payouts  <br />
          <span style={{color: '#000'}}>No contracts, no monthly fees,no worries.</span>
        </h4>

        

      </MDBCol>

      <MDBCol md='6' className='position-relative'>

        
        

        <MDBCard className='my-5 bg-glass'>
          <MDBCardBody className='p-5'>
            



            <div className="text-center" style={{color:"black"}}>
            <div style={{justifyContent:"space-evenly"}}>
            <span style={{ fontSize: '50px' }}> < SiPaytm /></span>
            <span style={{ fontSize: '50px' }}> <FaGooglePay /></span>
            <span style={{ fontSize: '50px' }}> <FaCcPaypal /></span>
            <span style={{ fontSize: '50px' }}> <FaApplePay /></span>
            <span style={{ fontSize: '50px' }}> <FaCcAmazonPay /></span>
            </div>
             

            </div>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  )
}

export default OrContainer;
