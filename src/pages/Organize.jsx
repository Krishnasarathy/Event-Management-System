import {  MDBCol, MDBContainer,  MDBRow } from "mdb-react-ui-kit"
import Navbar from "../components/Navbar"
import '../assets/CSS/Organize.css'
import '../components/Card'
import Image1 from '../assets/Images/bd4.jpg'
import Image2 from '../assets/Images/wed.jpg'
import Image3 from '../assets/Images/confi1.jpg'
import Footer from "../components/Footer"
import OrContainer from "../components/OrgCont"
import OCards from "../components/Orcard"
import HCards from "../components/HCard"
const Organize = () => {
  return (
    <>
    <Navbar/>
              <MDBContainer fluid className='p-5 background-radial-gradients overflow-hidden'>
        <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            Organize your <br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}> event end to end bookings</span>
        </h1>
    </MDBCol>
    <MDBCol md='6' className='position-relative'>
    </MDBCol>
</MDBRow>
</MDBContainer><br/>
<OrContainer/>
    <h1 className="hs">The simplest way to host all your events</h1><br/>
    
    <div className="Sports">
            
            <div className="imgsc">
            <HCards Image={Image1} name="Birthday Party" content="Decoration,birthday Cakes,Catering service" Btn="Book Now"/>
            <HCards Image={Image2} name="Marriage/Wedding" content="Stage Decorations,Invitation cards,Catering service" Btn="Book Now"/>
            <HCards Image={Image3} name="Corporate Events" content="Transport facility,Accommodation,Catering" Btn="Book Now"/>
            

            </div>
        </div><br/><br/><br/><br/>
        <h1 style={{color:"#003F3E"}} className="hs">Loved by customers</h1><br/>
        <div className="Sports">
            
            <div className="imgsc">
            <OCards name="Tiger vijay" content="Eventbookings met my expectations and I found everything I needed." n={4}/>
            <OCards name="Krishnasarathy" content="We are looking at holding another event next year and will be using them again. No complaints, just great service." n={5}/>
            <OCards name="SarathyKumaresan" content="As a first-time user, I just referred to help desk and staff. No problems after that." n={3}/>
            

            </div>
        </div>
        
    <Footer/>
    </>
  )
}

export default Organize
