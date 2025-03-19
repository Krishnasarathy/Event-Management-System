import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios'; 

const MyTable = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8181/api/v1/user/list', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
          }
        });
        setEvents(response.data.data);
      } catch (error) {
        console.error('Error fetching event list:', error);
      }
    };

    fetchEvents();
  }, []);
  
  // Define columns for the DataGrid
  const columns = [
    
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={events}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default MyTable;
