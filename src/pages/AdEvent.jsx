
import SideNavBar from '../components/sidenav'
import '../assets/CSS/Amin.css'

import GetEvents from '../components/getEvent'

const AdEvent = () => {
  return (
    <div style={{display:"flex"}}>
            <SideNavBar/>
          
    
      <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <br/>
            <h1 style={{fontFamily:"sans-serif",color:"Highlight"}}>Event Details</h1>
            <br/>
            <GetEvents/>  
      </div>
      </div> 
  )
}


export default AdEvent;






