import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

import { Button, ButtonToolbar, Form, Panel } from 'rsuite';

const GetEvents = () => {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);

    
    const [eventName,setEventName]=useState("");
    const [eventType,setEventType]=useState("");




  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get('http://localhost:8181/api/v1/event/eventlist', {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
    .then((response) => {
      setEvents(response.data.data);
    })
    .catch((error) => {
      console.error('Error fetching event list:', error);
    });
  };

  const deleteEvent = (eventid) => {
    axios.delete(`http://localhost:8181/api/v1/event/${eventid}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      data: {
        eventid: eventid
      }
    })
    .then((response) => {
      console.log('Event deleted:', response.data.message);
      fetchEvents(); // Refresh the event list after deletion
    })
    .catch((error) => {
      console.error('Error deleting event:', error);
    });
  };
  const UpdateEvent = (eventid) => {
    console.log(eventid)
    axios.put(`http://localhost:8181/api/v1/event/${eventid}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      data: {
        eventid: eventid
      }
    })
    .then((response) => {
      console.log('Event Updated:', response.data.message);
      fetchEvents(); // Refresh the event list after deletion
    })
    .catch((error) => {
      console.error('Error updating event:', error);
    });
  };
  return (
    <><><div style={{ display: "flex" }}>
          {events.map((event) => (
              // eslint-disable-next-line react/jsx-key
              <Panel shaded bordered bodyFill style={{ width: 240 }}>

                  <Panel>
                      <h6>Event Id:</h6>
                      <p>
                          {event.eventId}
                      </p>
                      <h6>Event Name:</h6>
                      <p>
                          {event.eventName}
                      </p>
                      <h6>Event Type:</h6>
                      <p>
                          {event.eventType}
                      </p>
                      <ButtonToolbar style={{ justifyContent: "center" }}>
                          <Button className="btn btn-outline-success">Confirm to declare</Button>
                          {/* Add onClick event handler for Edit button */}
                          <button className="btn btn-outline-danger" onClick={() => deleteEvent(event.eventId)}>Delete Event</button>
                          {/* <Button onClick={() => handleEdit(event)}>Edit</Button> */}
                          <button className="btn btn-outline-danger" onClick={toggleOpen}>Update Event</button>
                      </ButtonToolbar>
                      {/* Add additional buttons if needed */}
                  </Panel>
              </Panel>
          ))}
          
          <br />

      </div></>
      
      
      
      {events.map((event, index) => (
  <MDBModal key={index} open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
    <MDBModalDialog>
      <MDBModalContent>
        <MDBModalHeader>
          <MDBModalTitle style={{ color: "#9719e0" }}></MDBModalTitle>
          <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
        </MDBModalHeader>
        <MDBModalBody>
          <Form>
          <Form.Group controlId="event_id"> 
              <Form.ControlLabel>Update Event Name</Form.ControlLabel> 
              <Form.Control
                name="event_name" 
                value={event.eventId} 
                
              />
            </Form.Group>
            <Form.Group controlId="event_name"> 
              <Form.ControlLabel>Update Event Name</Form.ControlLabel> 
              <Form.Control
                name="event_name" 
                value={eventName} 
                onChange={(value) => setEventName(value)}
              />
            </Form.Group>
            <Form.Group controlId="event_type"> 
              <Form.ControlLabel>Update Event Type</Form.ControlLabel> 
              <Form.Control
                name="event_type" 
                value={eventType}
                onChange={(value) => setEventType(value)}
              />
            </Form.Group>
          </Form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn onClick={() => UpdateEvent(event.eventId)}>Update</MDBBtn> 
        </MDBModalFooter>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal>
))}
</>
  );
};

export default GetEvents;