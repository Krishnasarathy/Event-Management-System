import {  MDBCol, MDBContainer,  MDBRow } from "mdb-react-ui-kit"
import '../assets/CSS/Event.css'
import Navbar from "../components/Navbar"

import Cards from "../components/Card"
import Footer from "../components/Footer"
import Image1 from '../assets/Images/cskvs.avif'
import RCB from '../assets/Images/rcb.jpg'
import WPL from '../assets/Images/wpl.webp'
import ISL from '../assets/Images/isl.jpg'
import Ed from '../assets/Images/ed.avif'
import Ar from '../assets/Images/ar.jpg'
import Cold from '../assets/Images/cold.avif'
import Ani from '../assets/Images/Anii.jpg'
import Com from '../assets/Images/com.jpg'
import Eng from '../assets/Images/eng.jpg'
import EC from '../assets/Images/ele.avif'
import Co from '../assets/Images/con.jpg'
import EvContainer from "../components/EveContain"

const Events = () => {
  return (
    <><Navbar /><div>
          <MDBContainer fluid className='p-5 background-radial-gradients overflow-hidden'>

              <MDBRow>

                  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                      <h1 className="my-5 display-4 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                          Take in and <br />
                          <span style={{ color: 'hsl(218, 81%, 75%)' }}>track event space bookings</span>
                      </h1>



                  </MDBCol>

                  <MDBCol md='6' className='position-relative'>





                  </MDBCol>

              </MDBRow>

          </MDBContainer>
      </div>
      <EvContainer/>
        <div className="Sports">
            <h1 className="sports">Sports</h1><br/><br/>
            <div className="imgsc">
            <Cards Image={Image1} name="Chennai Super Kings vs Mumbai Indians" content="Starts: ₹2999" Btn="Book Now" location="wankhede stadium mumbai" price="₹2999" date="22nd March"/>
            <Cards Image={RCB} name="Royal Chalengers Bengaluru vs Delhi Capitals" content="Starts: ₹2599" Btn="Book Now" location="Chinnaswamy stadium" price="₹2599" date="23rd March "/>
            <Cards Image={WPL} name="Tata Women's Premier League" content="Starts: Octobor 2024" Btn="Comming Soon" location="Comming soon" price="Comming soon" date="Comming soon"/>
            <Cards Image={ISL} name="Hero Indian Super League FootBall" content="Starts: April 2024 "Btn="Comming Soon" location="Comming soon" price="Comming soon" date="Comming soon"/>

            </div>
        </div><br/><br/>
        <div className="Sports">
            <h1 className="sports">Music Shows</h1><br/><br/>
            <div className="imgsc">
            <Cards Image={Ar} name="A.R RAHMAN CONCERT" content="starts ₹1299" Btn="Book Now" location="Chennai" price="₹1299" date="2nd April"/>
            <Cards Image={Ed} name="Ed Sheeran 2024 India Tour" content="Starts ₹1239" Btn="Book Now" location="Banglore" price="₹1239" date="18th April"/>
            <Cards Image={Cold} name="Coldplay Weekend" content="Starts ₹3999" Btn="Book Now" location="Banglore" price="₹1299" date="23rd April"/>
            <Cards Image={Ani} name="Anirudh Music Concert" content="Starts ₹2999" Btn="Book Now" location="Coimbatore" price="₹1299" date="7th May"/>

            </div>
        </div><br/><br/>
        <div className="Sports">
            <h1 className="sports">Conferences</h1><br/><br/>
            <div className="imgsc">
            <Cards Image={Com} name="International Conference on Computer Communication " content="Coimbatore,India" Btn="Book Now" location="Coimbatore" price="₹999" date="7th May"/>
            <Cards Image={Eng} name="International Conference on Advances in Engineering" content="Chennai,India" Btn="Book Now" location="Coimbatore" price="₹899" date="7th May"/>
            <Cards Image={Co} name="ERTL-YANG Leader Summit 2024"content="Berlin,German" Btn="Book Now"location="Coimbatore" price="₹699" date="7th May"/>
            <Cards Image={EC} name="The Electric Vehicle and Energy Storage Systems" content="Mumbai,India" Btn="Book Now" location="Coimbatore" price="₹299" date="7th May"/>

            </div>
        </div>
        <Footer/>
      </>
  )
}

export default Events
