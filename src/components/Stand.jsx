import {
  MDBContainer,
  MDBCol,
  MDBRow,
   
} from "mdb-react-ui-kit";
import { RadioGroup, Radio } from 'rsuite';
import { useState } from 'react';

import { useParams } from 'react-router-dom';
import '../assets/CSS/radio.css'
import { SiPaytm } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import Loadingss from "./loading";

const Stand = () => {
    const [selectedValue, setSelectedValue] = useState('blank');
    const { param1 } = useParams();
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const gst=300;
  let valueToPrint;
  switch (selectedValue) {
    case 'blank':
      valueToPrint = 8799; // Handle the case when no option is selected
      break;
    case 'template':
      valueToPrint = 6599; // Value for Gold
      break;
    case 'import':
      valueToPrint = 2399; // Value for Silver
      break;
    default:
      valueToPrint = '';
  }



  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 5) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };
  
    return (
    <div >
     <MDBContainer className="py-5">
          <div className="d-flex justify-content-between align-items-center mb-5">
              <div className="d-flex flex-row align-items-center">
                  <h4 style={{color:"#0C6C90"}} className="text-uppercase mt-1">Payment</h4>
                  <span className="ms-2 me-3"></span>
              </div>
              
          </div>
          <MDBRow>
              <MDBCol md="7" lg="7" xl="6" className="mb-4 mb-md-0">
                  <h5 style={{color:"#000"}} className="mb-3">{param1}</h5>
                  <div>
                      <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row mt-1">
                          <div>
                            <RadioGroup
                                inline
                                name="radioList"
                                value={selectedValue}
                                onChange={handleChange}
                            >
                                <Radio value="blank">Platinum</Radio>
                                <Radio value="template">Gold</Radio>
                                <Radio value="import">Silver</Radio>
                            </RadioGroup>

      
                            
                            </div>
                          </div>
                         
                      </div>
                      <br/>
                      <p>
                          Insurance claim and all neccessary dependencies will be submitted
                          to your insurer for the covered portion of this order.
                      </p>
                     
                      <hr />
                      <div className="d-flex justify-content-between align-items-center">
                          
                      <div className="text-center" style={{color:"black"}}>
            <div style={{justifyContent:"space-evenly"}}>
            <span style={{ fontSize: '50px' }}> < SiPaytm /></span>
            <span style={{ fontSize: '50px' }}> <FaGooglePay /></span>
            <span style={{ fontSize: '50px' }}> <FaCcPaypal /></span>
            <span style={{ fontSize: '50px' }}> <FaApplePay /></span>
            <span style={{ fontSize: '50px' }}> <FaCcAmazonPay /></span>
            </div>
             

            </div>
                      </div>
                      
                   
                  </div>
              </MDBCol>
              <MDBCol md="5" lg="4" xl="4" offsetLg="1" offsetXl="2">
                  <div className="p-3" style={{ backgroundColor: "#eee" }}>
                      <span className="fw-bold">Amount</span>
                      <div className="d-flex justify-content-between mt-2">
                          <span>Ticket Price</span> <span>₹ {valueToPrint}</span>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                          <span>Seat count</span> <span>
                            <button onClick={increment}>↑</button></span>
                            <span><button onClick={decrement}>↓</button></span>
                          <div style={{display:"flex"}}>
                            <h2 style={{fontSize:"18px"}}> {count}</h2>
                            
                            
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                      <span>Gst</span> <span>₹ {gst}</span>
                      </div>                      
                      <hr />                                          
                      <hr />
                      <div className="d-flex justify-content-between mt-2">
                          <span>Total </span> <span >₹ {(valueToPrint+gst)*count}</span>
                      </div>
                      
                        <Loadingss/>
                  </div>
                  
              </MDBCol>
              
          </MDBRow><br />
          
      </MDBContainer>
    </div>
  )
}

export default Stand
