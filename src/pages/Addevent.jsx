
import SideNavBar from '../components/sidenav'
import '../assets/CSS/Amin.css'
import Eventaddform from '../components/eventform'

const AddEvent= () => {
  return (
    <div style={{display:"flex"}}>
            <SideNavBar/>
          
    
      <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <br/>
            <h1 style={{fontFamily:"sans-serif",color:"Highlight"}}>Add Event</h1>
            <br/>
            <Eventaddform/>   
      </div>
      </div> 
  )
}

export default AddEvent;
