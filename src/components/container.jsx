import {
    
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody
    
    
  }
  from 'mdb-react-ui-kit';
const Container = () => {
  return (
    <MDBContainer fluid className='p-5  overflow-hidden'>

    <MDBRow>

      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h4 className="my-1 display-3 fw-bold ls-tight px-3" style={{color:"#2599EC",fontSize: "45px"}}>
        Built for the events of today and tomorrow <br />
          <span style={{color: '#1C6498'}}>0% commission event ticketing</span>
        </h4>

        

      </MDBCol>

      <MDBCol md='6' className='position-relative'>

        
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <MDBCard className='my-5 bg-glass'>
          <MDBCardBody className='p-5'>
            



            <div className="text-center" style={{color:"black"}}>

            Our ticketing platform supports a wide range of payment options and 10+ payment gateways, so you can sell tickets exactly the way you want. Plus, you’ll never be penalized for your success—there are no commissions, and payouts happen instantly.

             

            </div>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  )
}

export default Container;
