import { DataGrid } from '@mui/x-data-grid';

// Sample data for rows and columns
const rows = [
  { id: 1, name: 'CSK vs MI', email: "Sports", event: 'Full',date:'₹1,17,90,000'},
  { id: 2, name: 'RCB vs DC', email: "Sports", event: 'Full' ,date:'₹94,67,000'},
  { id: 3, name: 'ARR Concert', email: "Music Show", event: '13475' ,date:'₹12,30,200'},
  { id: 4, name: 'Ed Sheeran', email: "Music Show", event: '3452' ,date:'₹8,63,529'},
  { id: 6, name: 'Hosting', email: "BirthDay", event: '200' ,date:'₹30,000'},
  { id: 7, name: 'Hosting', email: "Wedding", event: '2000' ,date:'₹5,00,000'}
  
  
  // Add more rows as needed
];

const columns = [
  { field: 'id', headerename: 'ID', width: 150 },
  { field: 'name', headerName: 'Event', width: 150 },
  { field: 'email', headerName: 'Type', width: 150 },
  { field: 'event', headerName: 'Bookings', width: 150 },
  { field: 'date', headerName: 'Total Amount', width: 150 }
  

  // Add more columns as needed
];

const AdEventlist = () => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { pemail: 0, pemailSize: 5 },
        },
      }}
      pemailSizeOptions={[5, 10]}
      checkboxSelection
    />
  )
}

export default AdEventlist
