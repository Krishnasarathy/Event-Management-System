import {
    
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody
    
    
  }
  from 'mdb-react-ui-kit';
const EvContainer = () => {
  return (
    <MDBContainer fluid className='p-5  overflow-hidden'>

    <MDBRow>

      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h4 className="my-1 display-3 fw-bold ls-tight px-3" style={{color:"#2599EC",fontSize: "45px"}}>
        Lowest fees in the industry  <br />
          <span style={{color: '#1C6498'}}>No contracts, no monthly fees,no worries.</span>
        </h4>

        

      </MDBCol>

      <MDBCol md='6' className='position-relative'>

        
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <MDBCard className='my-5 bg-glass'>
          <MDBCardBody className='p-5'>
            



            <div className="text-center" style={{color:"black"}}>

            Affordable ticket fees that make sense. We only charge when you sell tickets.

             

            </div>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  )
}

export default EvContainer;
