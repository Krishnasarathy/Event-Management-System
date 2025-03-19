
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
       

      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 style={{color:"#0376B7"}} className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='Danger' icon='ticket' className='me-3' />
                TicketGo
              </h6>
              <p>
                Endless Entertainment Anytime.Anywhere!
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 style={{color:"#0376B7"}} className='text-uppercase fw-bold mb-4'>Events</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Comedy Shows
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Conferences
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Meetups
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sports
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 style={{color:"#0376B7"}}  className='text-uppercase fw-bold mb-4'>Help</h6>
              <p>
                <a href='#!' className='text-reset'>
                Customer Care
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Terms and Conditons
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
            </MDBCol>

       
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https:krishnasarathy.vercel.app' target='blank'  >
          TicketGo.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
