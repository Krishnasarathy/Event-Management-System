
import SideNavBar from '../components/sidenav'
import '../assets/CSS/Amin.css'
import HostDetails from '../components/Hostdetail'

const AdHosting = () => {
  return (
    <div style={{display:"flex"}}>
            <SideNavBar/>
          
    
      <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <br/>
            <h1 style={{fontFamily:"sans-serif",color:"Highlight"}}>User Members</h1>
            <br/>
            <HostDetails/>    
      </div>
      </div> 
  )
}

export default AdHosting;
