import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './/assets/CSS/index.css'
import 'rsuite/dist/rsuite.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
