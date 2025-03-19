import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBContainer
} from 'mdb-react-ui-kit';


const Getuser = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get('http://localhost:8181/api/v1/user/list', {
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
    console.log(eventid)
    axios.delete(`http://localhost:8181/api/v1/user/${eventid}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json'
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

  return (
    <MDBContainer>
    <table className="table">
      <thead>
        <tr>
        
          <th>User Id</th>
          <th>Email</th>
          <th>Name</th>
          <th>Delete User</th>
          
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
            <tr key={event.eventid}>
                
              <td>{event.id}</td>
            <td>{event.email}</td>
            <td>{event.name}</td>
            
            <td>
              <button className="btn btn-outline-danger" onClick={() => deleteEvent(event.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </MDBContainer>
  );
};

export default Getuser;