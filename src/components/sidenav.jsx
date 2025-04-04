import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import PeopleSpeakerIcon from '@rsuite/icons/PeopleSpeaker';
import StorageIcon from '@rsuite/icons/Storage';
import { Link } from 'react-router-dom';


const SideNavBar = () => (
  <div style={{ width: 220 }}>
    <Sidenav defaultOpenKeys={['3', '4']}>
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item eventKey="1" icon={<DashboardIcon />}>
            <Link to="/TicketGo">Dashboard</Link>
          </Nav.Item>
         <Nav.Item eventKey="2" icon={<GroupIcon />}>
         <Link to="/InfoT">    User Group</Link>
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<PeopleSpeakerIcon/>}>
         <Link to="/Hostings">Hosting</Link>
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<StorageIcon/>}>
         <Link to="/EventDetails">Events</Link>
          </Nav.Item>
          <Nav.Item eventKey="2" >
         <Link to="/addevent">Add Event</Link> 
          </Nav.Item>
          <Nav.Item eventKey="2" >
         <Link to="/">    Logout</Link>
          </Nav.Item>
          <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
            <Nav.Item eventKey="3-1">Geo</Nav.Item>
            <Nav.Item eventKey="3-2">Devices</Nav.Item>
            <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
            <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
            <Nav.Item eventKey="4-1">Applications</Nav.Item>
            <Nav.Item eventKey="4-2">Channels</Nav.Item>
            <Nav.Item eventKey="4-3">Versions</Nav.Item>
            <Nav.Menu eventKey="4-5" title="Custom Action">
              <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
              <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);

export default SideNavBar;