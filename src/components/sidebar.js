import React, { useState } from 'react';
import { NavLink, Link, Routes, Route } from 'react-router-dom';
import { Nav, NavDropdown,Button, Dropdown } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineDashboard, AiOutlineGlobal, AiOutlineBook, AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineFilePdf, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import logo from '../images/geo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Import your sidebar CSS file for additional styling
import Geology from '../branches/geology';
import GeoPhy from '../branches/geophy';
import Login from '../Authentication/login';
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="row  ">
        <div className="brand">
          <img src={logo} alt="/" className="brand-logo img-fluid" />
          {!collapsed && <h4>Geo&GeoPhy</h4>}
        </div>
        <Button className="collapse-btn fw-bold" onClick={toggleSidebar}>
          {collapsed ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
        </Button>
      </div>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/" activeClassName="active-link fw-bold">
            <AiOutlineHome className="fs-4 me-2" /> {!collapsed && 'Home'}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/explore" activeClassName="active-link">
            <AiOutlineGlobal className="fs-4 me-2" /> {!collapsed && 'Explore'}
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title={<><AiOutlineBook className="fs-4 me-2" /> {!collapsed && 'Branches'} </>} id="basic-nav-dropdown" className='fw-bold text-light'>
          <NavDropdown.Item as={Link} to="/branches/geology"> <AiOutlineBook className="fs-4 me-2" /> Applied Geology</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/branches/geophy"> <AiOutlineBook className='fs-4 me-2' /> Exploration GeoPhysics</NavDropdown.Item>
          {/* Add more NavDropdown.Item components for other branches */}
        </NavDropdown>
        <NavDropdown title={<><AiOutlineFilePdf className="fs-4 me-2" /> {!collapsed && 'Papers'} </>} id="basic-nav-dropdown" className='fw-bold text-light'>
          <NavDropdown.Item href="#action/3.1"> <AiOutlineBook className="fs-4 me-2" /> IIT - GATE</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"> <AiOutlineBook className='fs-4 me-2' /> IIT - JAM</NavDropdown.Item>
          {/* Add more NavDropdown.Item components for other papers */}
        </NavDropdown>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/time" activeClassName="active-link">
            <AiOutlineDashboard className="fs-4 me-2 fw-bold" /> {!collapsed && 'Time Scale'}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/more" activeClassName="active-link">
            <AiOutlineMenu className="fs-4 me-2 fw-bold" /> {!collapsed && 'More'}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as = {NavLink} to = "/Authentication/login" activeClassName="active-link">
          <AiOutlineMenu className="fs-4 me-2 fw-bold" /> {!collapsed && 'Demo'}

          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <AiOutlineUser className="fs-4 me-2" /> {!collapsed && 'My Account'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#action/3.1">Profile</Dropdown.Item>
          <Dropdown.Item  >Login</Dropdown.Item>
          <Dropdown.Item href="#action/3.2">LogOut</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="col py-3">
        <Routes>
          <Route path="/" element={<div>Home Content</div>} />
          <Route path="/branches/geology" element={<Geology />} />
          <Route path="/branches/geophy" element={<GeoPhy />} />
          <Route path="/Authentication/login" element={<Login />} />
          {/* Add more Route components for other pages */}
        </Routes>
      </div>
    </div>
  );
};

export default Sidebar;
