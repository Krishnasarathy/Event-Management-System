import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,

} from 'mdb-react-ui-kit';
import SideNavBar from '../components/sidenav';

import TPieChart from '../components/Pie';
import TPieChart2 from '../components/Pie2';

const Admin = () => {
  return (
    <>    

          <div style={{display:"flex"}}>
            <SideNavBar/>
          
          <MDBContainer className="py">
              <MDBRow>
                
                  <MDBCol style={{marginLeft:"auto",marginRight:"auto",padding:"20px"}} lg="8">
                      <MDBCard style={{}} className="mb-4">
                          <MDBCardBody>
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Full Name</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">Krishnasarathy</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Email</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">krishnasarathy74@gmail.com</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Phone</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">93610729443</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                  <MDBCol sm="3">
                                      <MDBCardText>Role</MDBCardText>
                                  </MDBCol>
                                  <MDBCol sm="9">
                                      <MDBCardText className="text-muted">Admin</MDBCardText>
                                  </MDBCol>
                              </MDBRow>
                              <hr />
                             
                          </MDBCardBody>
                      </MDBCard>

                      <MDBRow>
                          <MDBCol md="6">
                              <MDBCard className="mb-5 mb-md-0">
                                  <MDBCardBody>
                                        <TPieChart2/>
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBCol>

                          <MDBCol md="6">
                              <MDBCard className="mb-4 mb-md-0">
                                  <MDBCardBody>
                                      <TPieChart/>
                                  </MDBCardBody>
                              </MDBCard>
                          </MDBCol>
                      </MDBRow>

                  </MDBCol>
              </MDBRow>
          </MDBContainer>
      
      </div> 
    </>
  )
}

export default Admin
