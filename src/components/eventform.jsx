import { Form, ButtonToolbar, Button } from 'rsuite';
import { useState } from 'react';

import axios from "axios"
const Eventaddform = () => {
  
  
  const [eventName,setEventName]=useState("");
  const [eventType,setEventType]=useState("");
  

  const handleClick = async () => {
    try {
      const body = {
        eventId: "string",
        event_name:eventName,
        event_type:eventType
      };
      console.log(body);
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8181/api/v1/event",
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("cant post plan:", error);
    }
  };

 

  return (
    <Form>
      <Form.Group controlId="event_name"> 
        <Form.ControlLabel>Event Name</Form.ControlLabel> 
        <Form.Control
          name="event_name" 
          value={eventName} 
          onChange={(value) => setEventName(value)}
        />
      </Form.Group>
      <Form.Group controlId="event_type"> 
        <Form.ControlLabel>Event Type</Form.ControlLabel> 
        <Form.Control
          name="event_type" 
          value={eventType}
          onChange={(value) => setEventType(value)}
        />
      </Form.Group>
      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary" onClick={()=>{handleClick()}}>Submit</Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  );
};

export default Eventaddform;
