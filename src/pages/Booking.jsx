
import Navbar from "../components/Navbar"
import Bdetail from "../components/bookdetails"
import '../assets/CSS/Book.css'
import Footer from "../components/Footer"
import OrContainer from "../components/OrgCont"
import '../assets/CSS/Bk.css'


const Booking = () => {

  return (
    <div>
        <Navbar/>
        <OrContainer/>
        <br/>
        <h1 className="ti">Check your Bookings</h1><br/>
      <div className="bk" >
        <Bdetail name="TATA IPL Chennai Super Kings vs Mumbai Indians" info="Confirmed"/><br/>
        <Bdetail name="International Conference on Computer Communication" info="Pending"/><br/>
        <Bdetail name="National Conference on Business Management" info="Declined"/><br/>
      </div><br/>
      <div className="bk">
        <Bdetail name="The Electric Vehicle and Energy Storage Systems" info="Expired"/><br/>
        <Bdetail name="Stand up comedy show Thoughts and Feelings Change" info="Expired"/><br/>
        <Bdetail name="National Conference on Business Management" info="Expired"/><br/>
      </div>
        <Footer/>
    </div>
  )
}

export default Booking
