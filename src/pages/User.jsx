
import SideNavBar from '../components/sidenav'
import '../assets/CSS/Amin.css'
import Getuser from '../components/getuser'

const User = () => {
  return (
    <div style={{display:"flex"}}>
            <SideNavBar/>
          
    
      <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <br/>
            <h1 style={{fontFamily:"sans-serif",color:"Highlight"}}>User Members</h1>
            <br/>
            <Getuser/>
      </div>
      </div> 
  )
}

export default User
