import Navbar from "../components/Navbar"

import '../assets/CSS/Home.css'
import Cards from "../components/Card"
import Image1  from  '../assets/Images/ipl.webp'
import Image2  from  '../assets/Images/event3.jpg'
import Image3  from  '../assets/Images/con.jpg'
import Footer from "../components/Footer"
import {  MDBContainer} from "mdb-react-ui-kit"
import Video from '../assets/Videos/eventvid.mp4'
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GroupIcon from '@mui/icons-material/Group';
import Container from "../components/container"





const Home = () => {
  return (
    <div className="home__container"><Navbar />
    <div>
    <MDBContainer fluid className='p-5 background-radial-gradientss overflow-hidden'>
   
    
      <div className="video-container">
        <video autoPlay loop muted playsInline className="full-width-height">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
  
    </MDBContainer><br/> <h4 className="my-1 display-3 fw-bold ls-tight px-3" style={{color:"#0C212F",textAlign:"center",fontSize: "50px",fontFamily:"sans-serif"}}>Ready to manage your events smarter</h4>
    
    
    <Container/>
    <br/><br/>

</div>
<div className="box-container">
      <h1 style={{textAlign:"center",color:"whitesmoke"}}>Backstage by the numbers</h1>
      <br/><div className="bxe">
          <h3><LocalActivityIcon style={{ fontSize: '40px' }} /> <br/>
            100,000+<br/>Events</h3>
          <h3><EventAvailableIcon style={{ fontSize: '40px' }} /><br/>50,000+<br/>Event planners</h3>
          <h3><GroupIcon style={{ fontSize: '40px' }} /><br/>1.6M+<br/>Attendees</h3>
      </div>
      
    </div>
    <div>
        <h1 className="title">Most Popular Events </h1><br/>
    </div>
    <div className="imagecard" >
        <Cards Image={Image1} name="Chennai Super Kings vs Mumbai Indians" content="Starts ₹2999" Btn="Book Now"/>
        <Cards Image={Image2} name="Stand up comedy show Thoughts and Feelings" content="Starts ₹199" Btn="Book Now"/>
        <Cards Image={Image3}  name="National Conference on Business Management" content="Free Entry" Btn="Book Now"  />
    </div>
    <br/>
    
    
    <Footer/>
  </div>
  )
}

export default Home




