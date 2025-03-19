import { DataGrid } from '@mui/x-data-grid';

// Sample data for rows and columns
const rows = [
  { id: 1, name: 'Krishnsarathy', email: "krishnsarathy@gmail.com", event: 'Conference',date:'24/04/2024',pay:"Paid" },
  { id: 2, name: 'Sarathy', email: "sarathy@gmail.com", event: 'Wedding' ,date:'02/07/2024',pay:"Paid"},
  { id: 3, name: 'Vijay', email: "vijay@gmail.com", event: 'Birthday' ,date:'26/03/2024',pay:"Paid"},
  { id: 4, name: 'Vishnu', email: "vishnu@gmail.com", event: 'Birthday' ,date:'29/07/2024',pay:"Paid"},
  { id: 5, name: 'Kumaresan', email: "kumaresan@gmail.com", event: 'Conference' ,date:'20/08/2024',pay:"Paid"},
  { id: 6, name: 'Kanthasamy', email: "kanthasamy@gmail.com", event: 'Conference' ,date:'28/02/2024',pay:"Paid"},
  { id: 7, name: 'Muthukumar', email: "muthukumar@gmail.com", event: 'Birthday' ,date:'13/05/2024',pay:"Paid"},
  { id: 8, name: 'Ramesh', email: "rames@gmail.com", event: 'Wedding' ,date:'04/11/2024',pay:"Paid"},
  { id: 9, name: 'Sekar', email: "sekar@gmail.com", event: 'Wedding' ,date:'17/03/2024',pay:"Paid"},
  { id: 10, name: 'Nantha', email: "nantha@gmail.com", event: 'Wedding' ,date:'10/07/2024',pay:"Paid"},
  
  // Add more rows as needed
];

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'event', headerName: 'Event', width: 150 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'pay', headerName: 'Payment', width: 150 }

  // Add more columns as needed
];

// Component usemail with values
const HostDetails = () => {
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
  );
};

export default HostDetails;
