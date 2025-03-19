import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Navbar from '../components/Navbar';
import UserChart from '../components/Userchart';
import DP from '../assets/Images/avatar.png'


export default function Profile2() {

  return (
    <>
    <Navbar/>
    <section style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="py-5">
              <MDBRow>
                  <MDBCol lg="4">
                      <MDBCard className="mb-4">
                          <MDBCardBody className="text-center">
                              <MDBCardImage
                                  src={DP}
                                  alt="avatar"
                                  className="rounded-circle"
                                  style={{ width: '150px',height:"150px" }}
                                  fluid />
                              <p className="text-muted mb-1"></p>
                              
                          </MDBCardBody>
                      </MDBCard>

                      <MDBCard className="mb-4 mb-lg-0">
                          <MDBCardBody className="p-0">
                              <MDBListGroup flush className="rounded-3">
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      <h4 style={{color:"black"}}>Your Activity</h4>
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      Sport Events: 10
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                     Music Shows: 3
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        Hostings: 2
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      Other Events: 7
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      Other Events: 7
                                  </MDBListGroupItem>
                                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                      Other Events: 7
                                  </MDBListGroupItem>
                              </MDBListGroup>
                          </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                  <MDBCol lg="8">
                      <MDBCard className="mb-4">
                          <MDBCardBody>
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Full Name</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">Vijay Ananth</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Email</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">vijaytiger123@gmail.com</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Phone</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">9003462004</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Credit Points</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">250⭐</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                             
                          </MDBCardBody>
                      </MDBCard>

                      <MDBRow>
                          <MDBCol md="6">
                              <MDBCard className="mb-4 mb-md-0">
                                  <MDBCardBody>
                                      <UserChart/>
                                      
                                      
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBCol>

                          <MDBCol md="6">
                              <MDBCard className="mb-4 mb-md-0">
                                  <MDBCardBody>
                                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Payment</span> History</MDBCardText>
                                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Event Hosting<span className="text-danger font-italic me-1">-₹50000</span> </MDBCardText>
                                      

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>CSK vs MI <span className="text-danger font-italic me-1">-₹7499</span></MDBCardText>
                                     

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>RCB vs DC <span className="text-danger font-italic me-1">-₹6499</span></MDBCardText>
                                      

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>ARR Concert <span className="text-danger font-italic me-1">-₹6499</span></MDBCardText>
                                      

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Anirudh Music Concert <span className="text-danger font-italic me-1">-₹2999</span></MDBCardText>

                                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>ERTL-YANG Leader Summit 2024 <span className="text-danger font-italic me-1">-₹5999</span></MDBCardText>
                                      
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBCol>
                      </MDBRow>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
      </section></>
  );
}